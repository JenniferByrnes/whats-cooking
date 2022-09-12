//need document.querySelectorAll to select all edit buttons
const editNote = document.querySelectorAll('.edit-note-btn')

//need document.querySelectorAll to select all delete buttons
const deleteNote = document.querySelectorAll('.delete-note-btn')


//FUNCTION TO EDIT RECIPE
async function editFormHandler(event) {
  event.preventDefault();

  const title = document
    .querySelector('input[name="recipe-title"]')
    .value.trim();
  const instructions = document
    .querySelector('textarea[name="recipe-instructions"]')
    .value.trim();
  const ingredients = document
    .querySelector('textarea[name="recipe-ingredients"]')
    .value.trim();
  const cuisines = document.querySelector(
    'input[name="recipe-cuisines"]'
  ).value;
  const serving = document.querySelector('input[name="recipe-serving"]').value;
  const image = document.querySelector('input[name="recipe-image"]').value;
  const summary = document.querySelector('input[name="recipe-summary"]').value;
  const type = document.querySelector('input[name="recipe-type"]').value;

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/recipes/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      ingredients,
      instructions,
      cuisines,
      image,
      summary,
      type,
      serving,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

function updtImage() {
  const source = document.getElementById("recipe-image").value;
  document.getElementById("recipe-pic").src = source;
}

document
  .querySelector(".edit-recipe-form")
  .addEventListener("submit", editFormHandler);
document.getElementById("recipe-image").addEventListener("change", updtImage);

  // FUNCTION FOR EDIT BUTTONS IN COMMENT SECTION
  // now loop over each note in function
   editNote.forEach((editButton) => {
    // select the comment ID for this note
    const commentID = editButton.getAttribute('data-commentID')

    // add event listener to each button to edit note when clicking 'edit' button
    editButton.addEventListener('click', async () => {
      // traversing DOM to div class='button'. Adding new sibling to this which is a text input html element  
      const buttonParent = editButton.parentElement
      // create a new html input element to add infront of the buttonParent
      const inputEl = document.createElement('input')
      // add new input element in front of buttonParent
      buttonParent.prepend(inputEl)
      
      // WHEN EDIT BUTTON IS CLICKED, DISPLAY SAVE and ABORT-EDIT BUTTONS and HIDE EDIT and DELETE BUTTONS
      // selects and hides edit button when edit button is clicked
      editButton.style.display = 'none'
      // select and hide delete button when edit button is clicked
      const deleteBtn = editButton.nextElementSibling
      deleteBtn.style.display = "none"
      // now select and show the save button when edit button is clicked
      const saveBtn = deleteBtn.nextElementSibling
      saveBtn.style.display = "inline"
     // now select and show abort-edit button when edit button is clicked
      const abortEditBtn = saveBtn.nextElementSibling
      abortEditBtn.style.display = "inline"
      
      // addEventListener for save button
      saveBtn.addEventListener('click', async() => {
        // assign inputEl.value to variable
        const editNoteText = inputEl.value
        
      // PUT request to update note when save button is clicked
      const response = await fetch(`/api/comments/${commentID}`, {
              method: 'PUT',
              body: JSON.stringify({
                editNoteText
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            });
          
            if (response.ok) {
              alert('Note Changed')
              document.location.reload(); //this reloads page when comment is edited
            } else  {
              alert(response.statusText);
            }
          });

          // add eventListener for abort-edit button
          abortEditBtn.addEventListener('click', async() => {
            document.location.reload();
          })
      });  
      
   }); 

   // FUNCTION FOR DELETE BUTTONS IN COMMENT SECTION
  // now loop over each note
  deleteNote.forEach((deleteBtn) => {
    // select the comment ID for this note
    const commentID = deleteBtn.getAttribute('data-commentID')

    // add event listener to each button to delete note when clicking 'delete' button
    // using callback function in event listener because I don't know how to do it any other way
    deleteBtn.addEventListener('click', async () => {
       const response = await fetch(`/api/comments/${commentID}`, {
          method: 'DELETE'
        });
      
        if (response.ok) {
          alert('Note Deleted')
          document.location.reload(); //this reloads page with comment deleted
        } else {
          alert(response.statusText);
        }
      
    })
  }) 

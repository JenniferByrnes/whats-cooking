
 //need document.querySelectorAll to select all edit buttons
 const editNote = document.querySelectorAll('.edit-note-btn')
    
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

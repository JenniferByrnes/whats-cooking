
 //need document.querySelectorAll to select all edit buttons
 const editNote = document.querySelectorAll('.edit-note-btn')
    
    // now loop over each note in function
  editNote.forEach((note) => {
    // select the comment ID for this note
    const commentID = note.getAttribute('data-commentID')

    // add event listener to each button to delete note when clicking 'delete' button
    // using callback function in event listener because I don't know how to do it any other way
    note.addEventListener('click', async () => {
      // traversing DOM to div class='button'. Adding new sibling to this which is a text input html element  
      const buttonParent = note.parentElement
      // create a new html input element to add infront of the buttonParent
      const inputEl = document.createElement('input')
      // add new input element in front of buttonParent
      buttonParent.prepend(inputEl)
      // display save button and hide edit and delete buttons when edit button is clicked
      // selects and hides save button when edit button is clicked
      note.style.display = 'none'
      // select and hide delete button when edit button is clicked
      const deleteBtn = note.nextElementSibling
      deleteBtn.style.display = "none"
      // now show the save button when edit button is clicked
      const saveBtn = note.previousElementSibling
      saveBtn.style.display = "inline"

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
            } else {
              alert(response.statusText);
            }
          
          });
      });   
   }); 
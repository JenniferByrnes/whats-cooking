  //need document.querySelectorAll to select all delete buttons
  const deleteNote = document.querySelectorAll('.delete-note-btn')

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

async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="recipe-title"]').value.trim();
  const instructions = document.querySelector('textarea[name="recipe-instructions"]').value.trim();
  const ingredients = document.querySelector('textarea[name="recipe-ingredients"]').value.trim();
  const cuisines = document.querySelector('input[name="recipe-cuisines"]').value;
  const serving = document.querySelector('input[name="recipe-serving"]').value;

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/recipes/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      ingredients, 
      instructions,
      cuisines,
      serving
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-recipe-form').addEventListener('submit', editFormHandler);
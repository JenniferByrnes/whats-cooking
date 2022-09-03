async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="recipe-title"]').value.trim();
  const recipe_ingredients = document.querySelector('input[name="recipe-ingredients"]').value;
  const recipe_instructions = document.querySelector('textarea[name="recipe-text"]').value.trim();
  const recipe_cuisines = document.querySelector('input[name="recipe-cuisines"]').value;
  const recipe_serving = document.querySelector('input[name="recipe-serving"]').value;

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/recipes/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      recipe_ingredients, 
      recipe_instructions,
      recipe_cuisines,
      recipe_serving
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

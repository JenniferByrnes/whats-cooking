async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="recipe-title"]').value;
  const recipe_ingredients = document.querySelector('input[name="recipe-ingredients"]').value;
  const recipe_instructions = document.querySelector('textarea[name="recipe-instructions"]').value.trim();
  const recipe_cuisines = document.querySelector('input[name="recipe-cuisines"]').value;
  const recipe_serving = document.querySelector('input[name="recipe-serving"]').value;

  const response = await fetch(`/api/recipes`, {
    method: 'POST',
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
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
  document.getElementById('display-recipes').classList.toggle("hide");
  document.getElementById('create-recipe').classList.toggle("hide");
}

function toggleHide(event) {
  event.preventDefault();
 
  document.getElementById('display-recipes').classList.toggle("hide");
  document.getElementById('create-recipe').classList.toggle("hide");
}

document.querySelector('.new-recipe-form').addEventListener('submit', newFormHandler);

document.querySelector('#create-btn').addEventListener('click', toggleHide);
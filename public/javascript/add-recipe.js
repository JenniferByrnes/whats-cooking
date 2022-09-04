async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="recipe-title"]').value;
  console.log("&&&&&&&&&&&&&&&&&&&");
  console.log("title=", title);
  const ingredients = document.querySelector('input[name="recipe-ingredients"]').value;
  console.log("ingredients=", ingredients);
  const instructions = document.querySelector('input[name="recipe-instructions"]').value;
  console.log("instructions=", instructions);
  const cuisines = document.querySelector('input[name="recipe-cuisines"]').value;
  console.log("cuisines=", cuisines);
  const serving = document.querySelector('input[name="recipe-serving"]').value;
  console.log("serving=", serving);

  const response = await fetch(`/api/recipes`, {
    method: 'POST',
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
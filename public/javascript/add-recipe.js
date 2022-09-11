async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="recipe-title"]').value;
  const ingredients = document.querySelector(
    'textarea[name="recipe-ingredients"]'
  ).value;

  const instructions = document.querySelector(
    'textarea[name="recipe-instructions"]'
  ).value;

  const cuisines = document.getElementById("recipe-cuisines");
  const cValue = cuisines.options[cuisines.selectedIndex].value;
  const serving = document.querySelector('input[name="recipe-serving"]').value;
  const image = document.querySelector('input[name="recipe-image"]').value;
  const summary = document.querySelector('input[name="recipe-summary"]').value;

  const recipeType = document.getElementById("recipe-type");
  const tValue = recipeType.options[recipeType.selectedIndex].value;

  const response = await fetch(`/api/recipes`, {
    method: "POST",
    body: JSON.stringify({
      title,
      ingredients,
      instructions,
      cValue,
      image,
      summary,
      tValue,
      serving,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
  document.getElementById("display-recipes").classList.toggle("hide");
  document.getElementById("create-recipe").classList.toggle("hide");
}

function toggleHide(event) {
  event.preventDefault();

  document.getElementById("display-recipes").classList.toggle("hide");
  document.getElementById("create-recipe").classList.toggle("hide");
}

document
  .querySelector(".new-recipe-form")
  .addEventListener("submit", newFormHandler);

document.querySelector("#create-btn").addEventListener("click", toggleHide);

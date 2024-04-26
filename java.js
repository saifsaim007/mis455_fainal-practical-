let allMeals = [];

function searchMeal() {
  const searchText = document.getElementById('searchInput').value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then(response => response.json())
    .then(data => {
      allMeals = data.meals;
      displayMeals(allMeals.slice(0, 5));
      if (allMeals.length > 5) {
        document.getElementById('showAllBtn').style.display = 'block';
      }
    });
}

function displayMeals(meals) {
  const results = document.getElementById('results');
  results.innerHTML = ''; // Clear previous results
  meals.forEach(meal => {
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('meal');
    mealDiv.innerHTML = `
      <h3>${meal.strMeal}</h3>
      <img src="${meal.strMealThumb}" alt="Meal Image">
      <p>ID: ${meal.idMeal}</p>
      <p>Title: ${meal.strCategory}</p>
      <p>Cooking Instructions: ${meal.strInstructions.substring(0, 100)}...</p>
    `;
    results.appendChild(mealDiv);
  });
}

function showAllMeals() {
  displayMeals(allMeals);
  document.getElementById('showAllBtn').style.display = 'none';
}
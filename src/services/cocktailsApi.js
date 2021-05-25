/* http://www.thecocktaildb.com/api.php */

const apiBaseUrl = 'http://www.thecocktaildb.com/api/json/v1/1/';
const categoriesListUrl = `${apiBaseUrl}list.php?c=list`;
const ingredientsListUrl = `${apiBaseUrl}list.php?i=list`;
const cocktailByIdBaseUrl = `${apiBaseUrl}lookup.php?i=`;
const cocktailByNameBaseUrl = `${apiBaseUrl}search.php?s=`;
const listByCatBaseUrl = `${apiBaseUrl}filter.php?c=`;
const listByIngrBaseUrl = `${apiBaseUrl}filter.php?i=`;
const randomCocktailBaseUrl = `${apiBaseUrl}random.php`;

export async function getCategoriesList() {
  const response = await fetch(categoriesListUrl);
  const categoriesList = await response.json();
  return categoriesList.drinks;
}

export async function getIngredientsList() {
  const response = await fetch(ingredientsListUrl);
  const ingredientsList = await response.json();
  return ingredientsList.drinks;
}

export async function getCocktailsByCat(cat) {
  if (!cat) return null;

  const category = cat.replace(' ', '_');
  const response = await fetch(`${listByCatBaseUrl}${category}`);
  const cocktailsListByCat = await response.json();
  return cocktailsListByCat.drinks;
}

export async function getCocktailsByIngrs(ingr) {
  const ingredients = ingr.replace(' ', '_');
  const response = await fetch(`${listByIngrBaseUrl}${ingredients}`);
  const cocktailsByIngrsDrinks = await response.json();
  return cocktailsByIngrsDrinks.drinks;
}

export async function getCocktailById(cocktailId) {
  const response = await fetch(`${cocktailByIdBaseUrl}${cocktailId}`);
  const cocktailById = await response.json();
  return cocktailById.drinks;
}

export async function getCocktailByName(cocktailName) {
  const response = await fetch(`${cocktailByNameBaseUrl}${cocktailName}`);
  const cocktailByName = await response.json();
  return cocktailByName.drinks[0];
}

export async function getRandomCocktail() {
  const response = await fetch(`${randomCocktailBaseUrl}`);
  const cocktail = await response.json();
  return cocktail.drinks[0];
}

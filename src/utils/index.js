export async function filterListByIngrs(list, listByIngr) {
  let cocktailsList = [];
  if (list.length < 1) {
    cocktailsList = listByIngr;
  } else {
    for (let i = 0; i < list.length; i + 1) {
      for (let index = 0; index < listByIngr.length; index + 1) {
        if (list[i].idDrink === listByIngr[index].idDrink) {
          cocktailsList.push(list[i]);
        }
      }
    }
  }
  return cocktailsList;
}

export function sortIngrsList(a, b) {
  if (a.strIngredient1 > b.strIngredient1) return 1;
  if (a.strIngredient1 < b.strIngredient1) return -1;
  return 0;
}

export function sortCatList(a, b) {
  if (a.strCategory > b.strCategory) return 1;
  if (a.strCategory < b.strCategory) return -1;
  return 0;
}

export function cocktailIngrs(cocktail) {
  const ingredients = [];
  for (let i = 1; i < 16; i += 1) {
    if (cocktail[`strIngredient${i}`] && cocktail[`strMeasure${i}`]) {
      ingredients.push(`${cocktail[`strIngredient${i}`]} - ${cocktail[`strMeasure${i}`]}`);
    } else if (cocktail[`strIngredient${i}`]) {
      ingredients.push(cocktail[`strIngredient${i}`]);
    }
  }
  return ingredients;
}

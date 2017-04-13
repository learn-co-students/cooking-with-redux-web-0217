import uuidV4  from 'uuid/v4';

export default function ingredients(state=[], action) {
  switch (action.type) {
    case "ADD_INGREDIENT":
      let ingredient = Object.assign({}, action.payload, {id: uuidV4()})
      return state.concat(ingredient)
    case "CREATE_INGREDIENT":
      let otherIngredient = Object.assign({}, action.payload, {id: uuidV4()})
      return state.concat(otherIngredient)
    case "REMOVE_INGREDIENT":
      return { state: state.filter((id) => id !== action.payload.id) }
    default:
      return state
  }
}

export function getIngredientById(ingredients, id) {
  return ingredients.find((ing) => ing.id === id)
}

export function getIngredientsById(ingredients, ids) {
  return ingredients.filter((ing) => ids.includes(ing.id))
}

export function getUnselectedIngredients(ingredients, presentIngredientIds) {
  return ingredients.filter((ing) => !presentIngredientIds.includes(ing.id))
}

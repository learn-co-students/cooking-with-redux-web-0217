export default function recipeFormReducer(state = {ingredientIds: []}, action){
  switch (action.type) {
    case "ADD_INGREDIENT":
      let ingredientIds = state.ingredientIds.concat(action.payload)
      return Object.assign({}, state, {ingredientIds: ingredientIds})
    default:
      return state
  }
}

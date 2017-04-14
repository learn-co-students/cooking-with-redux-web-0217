export default function recipeFormReducer(state = {ingredientIds:[]}, action) {
  switch (action.type) {
     case "RECIPE_FORM_ADD_INGREDIENT":
      state.ingredientIds.push(action.payload)
      return state;
    case "REMOVE_BOOK":
      const idx = state.indexOf(action.id);
      return [ ...state.slice(0, idx), ...state.slice(idx + 1) ];
    default:
      return state;
  }
}

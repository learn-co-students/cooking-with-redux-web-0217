import uuidV4  from 'uuid/v4';

let id = 0
export default function ingredientsReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_INGREDIENT":
      id++
      let ingredient = Object.assign({}, action.payload, {id: uuidV4()})
      return state.concat(ingredient);
    case "REMOVE_INGREDIENT":
      const idx = state.indexOf(action.id);
      return [ ...state.slice(0, idx), ...state.slice(idx + 1) ];
    default:
      return state;
  }
}

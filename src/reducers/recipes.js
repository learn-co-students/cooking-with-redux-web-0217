import uuidV4  from 'uuid/v4';
let id = 0
export default function recipesReducer(state = [], action) {
  switch (action.type) {
    case "ADD_RECIPE":
      id++
      let recipe = Object.assign({}, action.payload, {id: uuidV4()})
      return state.concat(recipe);
    case "REMOVE_BOOK":
      const idx = state.indexOf(action.id);
      return [ ...state.slice(0, idx), ...state.slice(idx + 1) ];
    default:
      return state;
  }
}

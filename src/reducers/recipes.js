import uuidV4  from 'uuid/v4';

export default function recipesReducer(state = [], action){
  switch (action.type) {
    case "ADD_RECIPE":
      return state.concat(Object.assign({}, action.payload, {id: uuidV4()}))
    default:
      return state
  }
}

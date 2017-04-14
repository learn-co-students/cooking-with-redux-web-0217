import uuidV4  from 'uuid/v4';

export default function ingredientsReducer(state = [], action){
  switch (action.type) {
    case "CREATE_INGREDIENT":
      return state.concat(Object.assign({}, action.payload, {id: uuidV4()}))
    default:
      return state
  }
}

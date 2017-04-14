export function createIngredient(state) {
  return {type: 'CREATE_INGREDIENT', payload: state}
}

export function addIngredient(state) {
  return {type: 'ADD_INGREDIENT', payload: state}
}

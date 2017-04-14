export function addRecipe(state) {
  let recipe = state
  return {type: 'ADD_RECIPE', payload: state}
}

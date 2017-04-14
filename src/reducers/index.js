import { combineReducers } from 'redux';
import recipesReducer from './recipes'
import ingredientsReducer from './ingredients'
import recipeFormReducer from './recipeForm'

export default combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer,
  recipeForm: recipeFormReducer
});

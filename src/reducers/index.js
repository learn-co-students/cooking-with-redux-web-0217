import { combineReducers } from 'redux';
import ingredientsReducer from './ingredients';
import recipesReducer from './recipes';
import recipeFormReducer from './recipeForm'

export default combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer,
  recipeForm: recipeFormReducer
});

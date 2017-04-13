import { combineReducers } from 'redux'
import recipes from './recipes.js'
import recipeForm from './recipeForm.js'
import ingredients from './ingredients.js'

export default combineReducers({
  recipes: recipes,
  recipeForm: recipeForm,
  ingredients: ingredients
})

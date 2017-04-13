import React, { Component } from 'react';
import { getIngredientsById, getUnselectedIngredients } from '../../reducers/ingredients.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ConnectedAddIngredient } from './AddIngredient.js'


export class AddIngredients extends Component {
  render() {

    const absentIngredients = this.props.unselectedIngredients ?
      this.props.unselectedIngredients.map((ing, idx) => <ConnectedAddIngredient key={idx} {...ing} />) :
      "All Ingredients Present!"

    const presentIngredients = this.props.selectedIngredients ?
      this.props.selectedIngredients.map((ing, idx) => <li key={idx}>{ing.name}</li>) :
      "No Ingredients Present!"

    return(
      <div>
        <div>
          "Current Ingredients:"
          <ul>
            {presentIngredients}
          </ul>
        </div>
        <div>
          "Add ingredients here:"
          <ul>
            {absentIngredients}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  let ingredients = state.ingredients || []
  let selectedIngredients = getIngredientsById(state.ingredients, state.recipeForm.ingredientIds) || []
  let unselectedIngredients = getUnselectedIngredients(state.ingredients, state.recipeForm.ingredientIds) || []
  return {
    ingredients: ingredients,
    selectedIngredients: selectedIngredients,
    unselectedIngredients: unselectedIngredients
  }
}

export const ConnectedAddIngredients = connect(mapStateToProps)(AddIngredients)

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ConnectedAddIngredient } from './AddIngredient'

export class AddIngredients extends Component {
  render(){
    const unselectedIngredients = this.props.unselectedIngredients.map((ingredient, index) => {
      return <ConnectedAddIngredient key={index} {...ingredient} />
    })
    const selectedIngredients = this.props.selectedIngredients.map((ingredient, index) => {
      return <li>{ingredient.name}</li>
    })

    return(
      <div>
        <h1>Unselected Ingredients:</h1>
        <ul>
          {unselectedIngredients}
        </ul>
        <h1>Selected Ingredients: </h1>
        <ul>
          {selectedIngredients}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedIngredients: state.ingredients.filter((el) => state.recipeForm.ingredientIds.indexOf(el) >= 0),
    unselectedIngredients: state.ingredients.filter((el) => state.recipeForm.ingredientIds.indexOf(el) === -1),
    ingredients: state.ingredients
  }
}

export const ConnectedAddIngredients = connect(mapStateToProps)(AddIngredients)

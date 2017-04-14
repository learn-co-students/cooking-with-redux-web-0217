import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedIngredients } from  './Ingredients';
import { ConnectedAddIngredient } from  './AddIngredient';
import { AddIngredient } from  '../../actions/ingredients';

export class AddIngredients extends Component {

  render(){

    let displaySelectedIngredients = this.props.selectedIngredients.map((ingredient) => <li>{ingredient.name}</li>)
    let displayUnselectedIngredients = this.props.unselectedIngredients.map((ingredient, index) => <ConnectedAddIngredient key={index} {...ingredient}/>)
    //
    return(
      <div>
          Add More Ingredients
          UNSELECTED
            {displayUnselectedIngredients ? displayUnselectedIngredients : null}
          SELECTED
          <ul>
            {displaySelectedIngredients ? displaySelectedIngredients : null}
          </ul>



      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedIngredients: state.ingredients.filter((el) => state.recipeForm.ingredientIds.indexOf(el) >= 0),
    unselectedIngredients: state.ingredients.filter((el) => state.recipeForm.ingredientIds.indexOf(el) === -1)
  };
};

export const ConnectedAddIngredients =  connect(mapStateToProps)(AddIngredients)

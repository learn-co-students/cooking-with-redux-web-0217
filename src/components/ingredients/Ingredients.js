import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedAddIngredient } from  './AddIngredient';


export class Ingredients extends Component {
// const Ingredients = (props) => {

  render(){
    const ingredients = this.props.ingredients.map((ingredient, index) =>
      <li key={index}>name: {ingredient.name} calories: {ingredient.calories}</li>
    )
    return(
        <div>
          <ul>

          </ul>
          <h2>ALL INGREDIENTS: {ingredients}</h2>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients
  };
};

export const ConnectedIngredients = connect(mapStateToProps)(Ingredients)

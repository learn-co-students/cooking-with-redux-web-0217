import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export class Ingredients extends Component {
  render(){
    const ingredients = this.props.ingredients.map((ing, idx) => (
      <li key={idx}>{ing.name} -- {ing.calories}</li>
    ))
    return(
        <div>
          <ul>
            {ingredients}
          </ul>
        </div>
    )
  }
}

function mapStateToProps(state){
  return {ingredients: state.ingredients}
}

export const ConnectedIngredients = connect(mapStateToProps)(Ingredients)

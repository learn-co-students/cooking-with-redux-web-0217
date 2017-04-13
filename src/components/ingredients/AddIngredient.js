import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { recipeFormAddIngredient } from '../../actions/ingredients.js'

export class AddIngredient extends Component {

  handleOnClick() {
    this.props.recipeFormAddIngredient(this.props.id)
  }

  render(){
    return(
      <button onClick={() => this.handleOnClick()}>Add</button>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({recipeFormAddIngredient: recipeFormAddIngredient}, dispatch)
}

export const ConnectedAddIngredient = connect(null, mapDispatchToProps)(AddIngredient)

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addRecipe } from '../../actions/recipes'
import { AddIngredients } from '../ingredients/AddIngredients'

export class RecipesInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      calories: ''}
  }

  handleOnNameChange(e){
    this.setState({
      name: e.target.value
    })
  }

  handleOnCaloriesChange(event){
    this.setState({
      calories: event.target.value
    })
  }

  handleOnSubmit(e){
    e.preventDefault()
    let recipe = {
      name: this.state.name,
      calories: this.state.calories,
      ingredientIds: this.props.selectedIngredients
    }
    this.props.addRecipe(recipe)
    this.setState({
      name: '',
      calories: ''
    })
  }

  render(){
    return(
      <form onSubmit={(e) => this.handleOnSubmit(e)}>
        <input type="text" onChange={(e) => this.handleOnNameChange(e)} placeholder="Recipe name"/>
        <AddIngredients />
        <input type="submit" />
      </form>
    )
  }
}

export const ConnectedRecipesInput = connect(mapStateToProps, mapDispatchToProps)(RecipesInput)

function mapDispatchToProps(dispatch){
  return bindActionCreators({addRecipe: addRecipe}, dispatch)
}

function mapStateToProps(state){
  return { selectedIngredients: state.recipeForm.ingredientIds }
}

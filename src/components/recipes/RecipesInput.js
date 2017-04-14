import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addRecipe } from '../../actions/recipes.js'
import { ConnectedAddIngredients } from '../ingredients/AddIngredients'

export class RecipesInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      calories: 0,
      ingredientIds: this.props.selectedIngredients
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(field, evt) {
    this.setState({
      [field]: evt.target.value
    });
  }

  handleSubmit() {
    this.props.addRecipe(this.state)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type="text" onChange={this.handleChange.bind(null, "name")} />
          <label>Calories: </label>
          <input type="text" onChange={this.handleChange.bind(null, "calories")} />
          <ConnectedAddIngredients />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { selectedIngredients: state.recipeForm.ingredientIds }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addRecipe: addRecipe
  }, dispatch);
}

export const ConnectedRecipesInput = connect(mapStateToProps, mapDispatchToProps)(RecipesInput)

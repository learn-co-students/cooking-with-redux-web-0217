import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addRecipe } from  '../../actions/recipes';
import { ConnectedAddIngredients } from '../ingredients/AddIngredients'

export class RecipesInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      calories: '',
      ingredientIds: this.props.selectedIngredients
    };
  }

  handleOnIngredientChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleOnCalorieChange(event) {
    this.setState({
      calories: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.props.addRecipe(this.state);
    this.setState({
      name: '', calories: ''
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <p>
            <input
              type="text"
              onChange={(event) => this.handleOnIngredientChange(event)}
              placeholder="recipe name"
              value={this.state.name} />
          </p>

          <ConnectedAddIngredients />
          <input type="submit" />
        </form>

      </div>
    )
  }
  }

  const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addRecipe: addRecipe
  }, dispatch);
  };
  const mapStateToProps = (state) => {
    return {selectedIngredients: state.recipeForm.ingredientIds}
  }
  export const ConnectedRecipesInput = connect(mapStateToProps, mapDispatchToProps)(RecipesInput)

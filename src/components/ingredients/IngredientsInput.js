import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createIngredient } from '../../actions/ingredients.js'

export class IngredientsInput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      calories: 0
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
    this.props.createIngredient(this.state)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type="text" onChange={this.handleChange.bind(null, "name")} />
          <label>Calories: </label>
          <input type="text" onChange={this.handleChange.bind(null, "calories")} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createIngredient: createIngredient
  }, dispatch);
}

export const ConnectedIngredientsInput = connect(null, mapDispatchToProps)(IngredientsInput)

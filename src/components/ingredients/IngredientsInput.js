import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createIngredient } from '../../actions/ingredients.js'


export class IngredientsInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      calories: ''
    }
  }

  handleOnNameChange(e){
    this.setState({
      name: e.target.value
    })
  }

  handleOnCalChange(e){
    this.setState({
      calories: e.target.value
    })
  }

  handleOnSubmit(e){
    e.preventDefault()
    console.log(this.state)
    this.props.createIngredient(this.state)
    this.setState({
      name: '',
      calories: ''
    })
  }

  render(){
    return(
      <form onSubmit={this.handleOnSubmit.bind(this)}>
        Name: <input type="text" onChange={(e) => this.handleOnNameChange(e)} />
        Cals: <input type="text" onChange={(e) => this.handleOnCalChange(e)} />
        <input type="submit" />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({createIngredient: createIngredient}, dispatch)
}

export const ConnectedIngredientsInput = connect(null, mapDispatchToProps)(IngredientsInput)

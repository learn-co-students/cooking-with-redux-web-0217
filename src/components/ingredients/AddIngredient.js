import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addIngredient } from '../../actions/ingredients'
import { bindActionCreators } from 'redux'


export class AddIngredient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      id: this.props.id
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.addIngredient(this.state.id)
  }

  render(){
    return(
      <li>
        <p>{this.state.name}</p>
        <button onClick={this.handleClick}>{this.state.name}</button>
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addIngredient: addIngredient
  }, dispatch);
}

export const ConnectedAddIngredient = connect(null, mapDispatchToProps)(AddIngredient)

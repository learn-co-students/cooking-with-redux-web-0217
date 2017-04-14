import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createIngredient } from  '../../actions/ingredients';


export class IngredientsInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '', calories: ''
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

    this.props.createIngredient(this.state);
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
              placeholder="ingredient name"
              value={this.state.name} />
          </p>
          <p>
            <input
              type="text"
              onChange={(event) => this.handleOnCalorieChange(event)}
              placeholder="calories"
              value={this.state.calories} />
          </p>
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
};

export const ConnectedIngredientsInput = connect(null, mapDispatchToProps)(IngredientsInput)

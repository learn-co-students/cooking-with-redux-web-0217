import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { RecipesInput } from './components/recipes/RecipesInput'
import { ConnectedIngredients } from './components/ingredients/Ingredients'
import { ConnectedAddIngredient } from './components/ingredients/AddIngredient'
import { ConnectedAddIngredients } from './components/ingredients/AddIngredients'
import { ConnectedIngredientsInput } from  './components/ingredients/IngredientsInput'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { Router, Route, browserHistory } from 'react-router'


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/recipes/new" component={RecipesInput} />
      <Route path="/ingredients" component={ConnectedIngredients} />
      <Route path="/ingredients/new" component={ConnectedAddIngredients} />

    </Router>
  </Provider>,
  document.getElementById('root'));

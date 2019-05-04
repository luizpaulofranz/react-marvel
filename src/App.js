import React from 'react';
import './App.css';

import { Container } from 'react-bootstrap';
import { Route, Switch, Redirect } from 'react-router-dom';

import CharactersList from './containers/CharactersList'
import Navbar from './components/Navbar'

function App() {
  
  const Routes = (
    <Switch>
      <Route path="/" exact component={CharactersList} />
      {/*<Route path="/charactere/edit/:_id" component={EditRecipe} />
      <Route path="/charactere/:_id" component={RecipePage} />*/}
      <Redirect to="/" />
    </Switch>
  );
  
  return (
    <Container fluid className="App">

      <header className="App-header">
        <Navbar />
      </header>

      { Routes }

    </Container>
  );
}

export default App;

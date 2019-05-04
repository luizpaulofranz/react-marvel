import React from 'react';
import './App.css';

import { Container } from 'react-bootstrap';
import { Route, Switch, Redirect } from 'react-router-dom';

import CharactersList from './containers/CharactersList';
import Detail from './containers/detail/Detail';
import Navbar from './components/Navbar';

function App() {
  
  const Routes = (
    <Switch>
      <Route path="/" exact component={CharactersList} />
      {/*<Route path="/charactere/edit/:_id" component={EditRecipe} />*/}
      <Route path="/detail/:_id" component={Detail} />
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

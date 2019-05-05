import React from 'react';
import './App.css';

import { Container } from 'react-bootstrap';
import { Route, Switch, Redirect } from 'react-router-dom';

import CharactersList from './containers/CharactersList';
import Detail from './containers/detail/Detail';
import HeroForm from './containers/form/HeroForm';
import Navbar from './components/Navbar';

function App() {
  
  const Routes = (
    <Switch>
      <Route path="/" exact component={CharactersList} />
      <Route path="/edit/:_id" component={HeroForm} />
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

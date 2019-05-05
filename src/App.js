import React from 'react';
import './App.css';

import { Container } from 'react-bootstrap';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './store/actions/actions';

import CharactersList from './components/CharactersList';
import Detail from './containers/detail/Detail';
import HeroForm from './containers/form/HeroForm';
import Navbar from './components/Navbar';

const Routes = (
  <Switch>
    <Route path="/" exact component={CharactersList} />
    <Route path="/edit/:_id" component={HeroForm} />
    <Route path="/detail/:_id" component={Detail} />
    <Redirect to="/" />
  </Switch>
);

class App extends React.Component {

  componentDidMount() {
    // this action is passed by reducer (redux)
    this.props.onInitState();
  }
  
  render() {
    return (
      <Container fluid className="App">

        <header className="App-header">
          <Navbar />
        </header>

        { Routes }

      </Container>
    );
  }
}

// export default App;

const mapDispatchToProps = dispatch => {
  // which execute ASYNC codes and returns an object with dispatch to the reducers
  return {
    onInitState: () => dispatch(actions.initState()),
  };
}

// global error handler
export default connect(null, mapDispatchToProps)(App);
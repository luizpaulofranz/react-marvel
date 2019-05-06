import thunk from 'redux-thunk';
import reducer from './reducer';
import { createStore, applyMiddleware, compose } from 'redux';

// to debug purposes we apply this middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// creating our redux global state object
const store = createStore(
    reducer, // we have to pass only one reducer
    // thunk is for handle async codes in actions
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;
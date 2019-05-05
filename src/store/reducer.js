import * as actionTypes from './actions/actionTypes';

const initialState = {
    error: null,
    isLoaded: false,
    heroes: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_HEROES:
            console.log("reducer", action);
            return {
                error: null,
                isLoaded: true,
                heroes: action.heroes
            }

        case actionTypes.FETCH_HEROES_FAILD:
            return {
                ...initialState,
                error: true
            };
        default:
            return state;
    }
    return state;
};

export default reducer;
import * as actionTypes from './actions/actionTypes';

const initialState = {
    error: null,
    isLoaded: false,
    heroes: [],
    currentHero: null
};

const reducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case actionTypes.SET_HEROES:
            return {
                ...state,
                error: null,
                isLoaded: true,
                heroes: action.heroes
            }

        case actionTypes.FETCH_HEROES_FAILD:
            return {
                ...initialState,
                error: true
            };

        case actionTypes.GET_HERO:
            return {
                ...state,
                currentHero: state.heroes.find( myHero => {
                    if (myHero.id == action._id)
                        return myHero;
                })
            };

        default:
            return state;       
    }
};

export default reducer;
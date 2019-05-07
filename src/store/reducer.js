import * as actionTypes from './actions/actionTypes';

const initialState = {
    error: null,
    isLoaded: false,
    heroes: [],
    displayedHeroes: [],
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

        case actionTypes.SEARCH_HERO:
            const term = action.term.toLowerCase();
            const filteredHeroes = state.heroes.filter( myHero => {
                if (myHero.name.toLowerCase().includes(term)) {
                    return myHero;
                }
            });
            
            return {
                ...state,
                heroes: filteredHeroes
            };

        case actionTypes.EDIT_HERO:
            const index = state.heroes.findIndex( myHero => {
                if (myHero.id == action.hero.id)
                    return myHero;
            });
            let currenHeroes = [...state.heroes];
            currenHeroes[index].name = action.hero.name;
            
            const ext = action.hero.imageUrl.substr(action.hero.imageUrl.length -3);
            const path = action.hero.imageUrl.replace('.'+ext, '');
            
            if (currenHeroes[index].thumbnail.path != path) {
                currenHeroes[index].thumbnail.path = action.hero.imageUrl.replace('.'+ext, '');
                currenHeroes[index].thumbnail.extension = ext;
            }
            return {
                ...state,
                heroes: currenHeroes
            };

        default:
            return state;       
    }
};

export default reducer;
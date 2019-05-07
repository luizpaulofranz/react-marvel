import * as actionTypes from './actions/actionTypes';

const initialState = {
    error: null,
    isLoaded: false,
    heroes: [],
    currentHero: null
};

const reducer = ( state = initialState, action ) => {
    // testing puposes
    let heroesList;

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
            // for testing purposes
            heroesList = state.heroes;
            if (action.heroes) {
                heroesList = action.heroes;
            }
            return {
                ...state,
                heroes: heroesList,
                currentHero: heroesList.find( myHero => {
                    if (myHero.id == action._id)
                        return myHero;
                })
            };

        case actionTypes.SEARCH_HERO:
            // for testing purposes
            heroesList = state.heroes;
            if (action.heroes) {
                heroesList = action.heroes;
            }
            const term = action.term.toLowerCase();
            const filteredHeroes = heroesList.filter( myHero => {
                if (myHero.name.toLowerCase().includes(term)) {
                    return myHero;
                }
            });
            
            return {
                ...state,
                heroes: filteredHeroes
            };

        case actionTypes.EDIT_HERO:
            // for testing purposes
            heroesList = state.heroes;
            if (action.heroes) {
                heroesList = action.heroes;
            }
            const index = heroesList.findIndex( myHero => {
                if (myHero.id == action.hero.id)
                    return myHero;
            });
            let currenHeroes = [...heroesList];
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
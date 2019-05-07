import reducer from './reducer';
import * as actionTypes from './actions/actionTypes'

describe('Reducer Tests', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            error: null,
            isLoaded: false,
            heroes: [],
            displayedHeroes: [],
            currentHero: null
        });
    });
});
import * as actionTypes from './actionTypes';

import axios from 'axios';
import md5 from "blueimp-md5";

// this handle the sync codes
export const setHeroes = heroes => {
    return {
        type: actionTypes.SET_HEROES,
        heroes: heroes
    };
}

export const fetchHeroesFailed = () => {
    return {
        type: actionTypes.FETCH_HEROES_FAILD
    };
}

export const getHero = (_id) => {
    return {
        type: actionTypes.GET_HERO,
        _id
    }
}

export const editHero = ( hero ) => {
    return {
        type: actionTypes.EDIT_HERO,
        hero
    }
};

// handle the async codes
export const initState = () => {
    
    const ts = Date.now();
    const apiKey = "74275a7c8e9b47d97893575dfbd94e48";
    const pvtKey = "2d0b3c52c162a914a5ce0e6a3fa18fcc5688b731";
    const hash = md5(ts+pvtKey+apiKey);
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

    // dispatch is provided by react-thunk
    return dispatch => {
        axios.get(url)
        .then(res => {
            // and dispatch to the sync codes
            dispatch(setHeroes(res.data.data.results))
        })
        .catch(
            err => {
                // dispatch an error =/
            dispatch(fetchHeroesFailed())
        });
    }
}
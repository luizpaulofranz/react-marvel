import reducer from './reducer';
import * as actionTypes from './actions/actionTypes';

describe('Reducer Tests', () => {
    
    it('should return the initial empty state', () => {
        expect(reducer(undefined, {})).toEqual({
            error: null,
            isLoaded: false,
            heroes: [],
            currentHero: null
        });
    });

    it('should return the seted state', () => {
        expect(reducer(undefined, {type: actionTypes.SET_HEROES, heroes: mock})).toEqual(
            {
                error: null,
                isLoaded: true,
                heroes: mock,
                currentHero: null
            }
        );
    });

    it('should return the error state', () => {
        expect(reducer(undefined, {type: actionTypes.FETCH_HEROES_FAILD})).toEqual(
            {
                error: true,
                isLoaded: false,
                heroes: [],
                currentHero: null
            }
        );
    });

    /** ## test get hero ## */
    it('should return the hero by id', () => {
        expect(reducer( {...initialState, heroes: mock}, {type: actionTypes.GET_HERO, _id: "1011334"})).toEqual(
            {
                error: null,
                isLoaded: false,
                heroes: mock,
                currentHero: {
                    "id": 1011334,
                    "name": "3-D Man",
                    "description": "",
                    "modified": "2014-04-29T14:18:17-0400",
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
                        "extension": "jpg"
                    },
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
                    "comics": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/comics",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/comics/21366",
                                "name": "Avengers: The Initiative (2007) #14"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/comics/24571",
                                "name": "Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)"
                            }],
                        "returned": 2
                    },
                    "series": {
                        "available": 1,
                        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/series",
                        "items": [{
                                "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
                                "name": "Avengers: The Initiative (2007 - 2010)"
                            }],
                        "returned": 1
                    },
                    "stories": {
                        "available": 3,
                        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/stories",
                        "items": [{
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/19947",
                                "name": "Cover #19947",
                                "type": "cover"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/19948",
                                "name": "The 3-D Man!",
                                "type": "interiorStory"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/19949",
                                "name": "Cover #19949",
                                "type": "cover"
                            }],
                        "returned": 3
                    },
                    "events": {
                        "available": 1,
                        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/events",
                        "items": [{
                                "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
                                "name": "Secret Invasion"
                            }],
                        "returned": 1
                    },
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=74275a7c8e9b47d97893575dfbd94e48"
                        },
                        {
                            "type": "wiki",
                            "url": "http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=74275a7c8e9b47d97893575dfbd94e48"
                        },
                        {
                            "type": "comiclink",
                            "url": "http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=74275a7c8e9b47d97893575dfbd94e48"
                        }
                    ]
                }
            }
        );
    });

    /** ## test search hero ## */
    it('should return the searched hero', () => {
        expect(reducer({...initialState, heroes: mock}, {type: actionTypes.SEARCH_HERO, term: 'bomb'})).toEqual(
            {
                error: null,
                isLoaded: false,
                currentHero: null,
                heroes: [
                    {
                        "id": 1017100,
                        "name": "A-Bomb (HAS)",
                        "description": "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
                        "modified": "2013-09-18T15:54:04-0400",
                        "thumbnail": {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
                            "extension": "jpg"
                        },
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017100",
                        "comics": {
                            "available": 3,
                            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/comics",
                            "items": [
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/40632",
                                    "name": "Hulk (2008) #53"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/40630",
                                    "name": "Hulk (2008) #54"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/40628",
                                    "name": "Hulk (2008) #55"
                                }
                            ],
                            "returned": 3
                        },
                        "series": {
                            "available": 1,
                            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/series",
                            "items": [
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3374",
                                    "name": "Hulk (2008 - 2012)"
                                }
                            ],
                            "returned": 1
                        },
                        "stories": {
                            "available": 7,
                            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/stories",
                            "items": [
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/92078",
                                    "name": "Hulk (2008) #55",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/92079",
                                    "name": "Interior #92079",
                                    "type": "interiorStory"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/92082",
                                    "name": "Hulk (2008) #54",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/92083",
                                    "name": "Interior #92083",
                                    "type": "interiorStory"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/92086",
                                    "name": "Hulk (2008) #53",
                                    "type": "cover"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/92087",
                                    "name": "Interior #92087",
                                    "type": "interiorStory"
                                },
                                {
                                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/105929",
                                    "name": "cover from Free Comic Book Day 2013 (Avengers/Hulk) (2013) #1",
                                    "type": "cover"
                                }
                            ],
                            "returned": 7
                        },
                        "events": {
                            "available": 0,
                            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/events",
                            "items": [],
                            "returned": 0
                        },
                        "urls": [
                            {
                                "type": "detail",
                                "url": "http://marvel.com/comics/characters/1017100/a-bomb_has?utm_campaign=apiRef&utm_source=74275a7c8e9b47d97893575dfbd94e48"
                            },
                            {
                                "type": "comiclink",
                                "url": "http://marvel.com/comics/characters/1017100/a-bomb_has?utm_campaign=apiRef&utm_source=74275a7c8e9b47d97893575dfbd94e48"
                            }
                        ]
                    }
                ],
            }
        );
    });

    /** ## test edit hero ## */
    it('should return data with edited hero', () => {
        expect(reducer({...initialState, heroes: mock}, {type: actionTypes.EDIT_HERO, hero: { id: "1011334", name:'Nome Alterado', imageUrl: "http://urldaimagemalterada.com/imagem.jpg" }})).toEqual(
            {
                error: null,
                isLoaded: false,
                currentHero: null,
                heroes: mockEditHero
            }
        );
    });

});

/* #####################################################  */
/* ############# JUST OUR MOCKS OBJects ################  */
/* #####################################################  */

const initialState = {
    error: null,
    isLoaded: false,
    heroes: [],
    currentHero: null
};

const mock = [
    {
        "id": 1011334,
        "name": "3-D Man",
        "description": "",
        "modified": "2014-04-29T14:18:17-0400",
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
            "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
        "comics": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/comics",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/21366",
                    "name": "Avengers: The Initiative (2007) #14"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24571",
                    "name": "Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)"
                }],
            "returned": 2
        },
        "series": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/series",
            "items": [{
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
                    "name": "Avengers: The Initiative (2007 - 2010)"
                }],
            "returned": 1
        },
        "stories": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/stories",
            "items": [{
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/19947",
                    "name": "Cover #19947",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/19948",
                    "name": "The 3-D Man!",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/19949",
                    "name": "Cover #19949",
                    "type": "cover"
                }],
            "returned": 3
        },
        "events": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/events",
            "items": [{
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
                    "name": "Secret Invasion"
                }],
            "returned": 1
        },
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=74275a7c8e9b47d97893575dfbd94e48"
            },
            {
                "type": "wiki",
                "url": "http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=74275a7c8e9b47d97893575dfbd94e48"
            },
            {
                "type": "comiclink",
                "url": "http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=74275a7c8e9b47d97893575dfbd94e48"
            }
        ]
    },
    {
        "id": 1017100,
        "name": "A-Bomb (HAS)",
        "description": "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
        "modified": "2013-09-18T15:54:04-0400",
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
            "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017100",
        "comics": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/comics",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/40632",
                    "name": "Hulk (2008) #53"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/40630",
                    "name": "Hulk (2008) #54"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/40628",
                    "name": "Hulk (2008) #55"
                }
            ],
            "returned": 3
        },
        "series": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/series",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3374",
                    "name": "Hulk (2008 - 2012)"
                }
            ],
            "returned": 1
        },
        "stories": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/92078",
                    "name": "Hulk (2008) #55",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/92079",
                    "name": "Interior #92079",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/92082",
                    "name": "Hulk (2008) #54",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/92083",
                    "name": "Interior #92083",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/92086",
                    "name": "Hulk (2008) #53",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/92087",
                    "name": "Interior #92087",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/105929",
                    "name": "cover from Free Comic Book Day 2013 (Avengers/Hulk) (2013) #1",
                    "type": "cover"
                }
            ],
            "returned": 7
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/events",
            "items": [],
            "returned": 0
        },
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/characters/1017100/a-bomb_has?utm_campaign=apiRef&utm_source=74275a7c8e9b47d97893575dfbd94e48"
            },
            {
                "type": "comiclink",
                "url": "http://marvel.com/comics/characters/1017100/a-bomb_has?utm_campaign=apiRef&utm_source=74275a7c8e9b47d97893575dfbd94e48"
            }
        ]
    },
    {
        "id": 1009144,
        "name": "A.I.M.",
        "description": "AIM is a terrorist organization bent on destroying the world.",
        "modified": "2013-10-17T14:41:30-0400",
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec",
            "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
        "comics": {
            "available": 40,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009144/comics",
            "items": [{
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/36763",
                    "name": "Ant-Man & the Wasp (2010) #3"
                }],
            "returned": 1
        },
        "series": {
            "available": 33,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009144/series",
            "items": 
                [{
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/13082",
                    "name": "Ant-Man & the Wasp (2010 - 2011)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
                    "name": "Avengers (1998 - 2004)"
                }],
            "returned": 2
        },
        "stories": {
            "available": 52,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009144/stories",
            "items": [{
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/5800",
                    "name": "Avengers and Power Pack Assemble! (2006) #2",
                    "type": "cover"
                }],
            "returned": 1
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009144/events",
            "items": [],
            "returned": 0
        },
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/characters/1009144/aim.?utm_campaign=apiRef&utm_source=74275a7c8e9b47d97893575dfbd94e48"
            },
            {
                "type": "wiki",
                "url": "http://marvel.com/universe/A.I.M.?utm_campaign=apiRef&utm_source=74275a7c8e9b47d97893575dfbd94e48"
            },
            {
                "type": "comiclink",
                "url": "http://marvel.com/comics/characters/1009144/aim.?utm_campaign=apiRef&utm_source=74275a7c8e9b47d97893575dfbd94e48"
            }
        ]
    }
];

/** MOCK FOR OUR EDITED HERO */
// make a deep copy
let mockEditHero = JSON.parse(JSON.stringify(mock));
mockEditHero[0].name="Nome Alterado";
mockEditHero[0].thumbnail.path="http://urldaimagemalterada.com/imagem";
mockEditHero[0].thumbnail.extension="jpg";
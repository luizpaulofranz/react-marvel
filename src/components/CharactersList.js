import React from 'react';
import { connect } from 'react-redux';

import HeroCard from './card/HeroCard';

export const CharactersList = (props) => {

    if(props.error) return <div>Error</div>
    if(!props.isLoaded) return <div>Loading</div>

    return (
        <div>
            { props.heroes.map( hero => (
                <HeroCard key={hero.id} hero={hero} />
            )) }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        error: state.error,
        isLoaded: state.isLoaded,
        heroes: state.heroes
    };
}

export default connect(mapStateToProps)(CharactersList);
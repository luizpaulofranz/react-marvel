import React from 'react';
import axios from 'axios';

import md5 from "blueimp-md5";
import HeroCard from '../components/card/HeroCard';

class CharactersList extends React.Component {

    state = {
        error: null,
        isLoaded: false,
        heros: []
    }

    // temporariamente ate colocarmos o redux
    doRequest = async () => {
        try {
            const ts = Date.now();
            const apiKey = "74275a7c8e9b47d97893575dfbd94e48";
            const pvtKey = "2d0b3c52c162a914a5ce0e6a3fa18fcc5688b731";
            const hash = md5(ts+pvtKey+apiKey);
            const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
            const response = await axios.get(url);
            
            console.log(response);
            
            // setamos o estado com os dados retornados pela API
            this.setState(() => ({ 
                isLoaded: true,
                heros: response.data.data
            }));
            
        } catch (error) {
            console.log(error);
            // Em caso de erro, setamos o erro ao estado
            this.setState(() => ({ 
                error,
                isLoaded: false,
            }))
        }
    }

    componentDidMount() {
        this.doRequest();
    }

    render() {

        if(this.state.error) return <div>Error</div>
        if(!this.state.isLoaded) return <div>Loading</div>

        return (
            <div>
                { this.state.heros.results.map( hero => (
                    <HeroCard key={hero.id} hero={hero} />
                )) }
            </div>
        )
    }

}

export default CharactersList;
import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import axios from 'axios';
import md5 from "blueimp-md5";

import { Row, Image, Jumbotron, Button, Table } from 'react-bootstrap';

import './Detail.css';
import '../Common.css';

class Detail extends React.Component {

    state = {
        error: null,
        isLoaded: false,
        hero: {}
    }

    backClick = () => {
        this.props.history.goBack()
    }

    editClick = () => {
        this.props.history.push(`/edit/${this.state.hero.id}`);
    }

    // temporariamente ate colocarmos o redux
    doRequest = async () => {
        try {
            const { _id } = this.props.match.params; // to get the URL params
            const ts = Date.now();
            const apiKey = "74275a7c8e9b47d97893575dfbd94e48";
            const pvtKey = "2d0b3c52c162a914a5ce0e6a3fa18fcc5688b731";
            const hash = md5(ts+pvtKey+apiKey);
            const url = `https://gateway.marvel.com:443/v1/public/characters/${_id}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
            const response = await axios.get(url);
            
            console.log(response);
            
            // setamos o estado com os dados retornados pela API
            this.setState(() => ({ 
                isLoaded: true,
                hero: response.data.data.results[0]
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
        { /* Link back in all returns */}
        const Ret = <Button onClick={this.backClick} className="btn btn-primary link-back">Voltar</Button>;

        if(this.state.error) return (<div>{Ret}<br/>Error</div>);
        if(!this.state.isLoaded) return (<div>{Ret}<br/>Loading</div>);

        return (
        <Fragment>
        {Ret}

        <Row className="detail">

            <div className="hero-image-container" >
                <Image src={this.state.hero.thumbnail.path+'.'+this.state.hero.thumbnail.extension} />
            </div>
            <Jumbotron style={{width: "100%"}}>
                <h1>{this.state.hero.name}</h1>
                { this.state.hero.description != "" ? <p>{this.state.hero.description}</p> : ""}

                <Button variant="primary" onClick={this.editClick} >Edit</Button>
                <h2>Series List:</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.hero.series.items.map( (comic, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{comic.name}</td>
                        </tr>
                        ) )}
                    </tbody>
                </Table>
            </Jumbotron>
        </Row>
        </Fragment>
        );
    }
}

export default withRouter(Detail);
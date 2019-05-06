import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import { Row, Image, Jumbotron, Button, Table } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';

import './Detail.css';
import '../Common.css';

class Detail extends React.Component {

    backClick = () => {
        this.props.history.goBack()
    }

    editClick = () => {
        this.props.history.push(`/edit/${this.props.hero.id}`);
    }

    componentDidMount() {
        const { _id } = this.props.match.params; // to get the URL params
        this.props.getCurrentHero( _id );
    }
    

    // linkback in all returns
    render() {
        const Ret = <Button onClick={this.backClick} className="btn btn-primary link-back">Voltar</Button>;

        if(this.props.error) return (<div>{Ret}<br/>Error</div>);
        if(!this.props.hero) return (<div>{Ret}<br/>Loading</div>);

        return (
        <Fragment>
        {Ret}

        <Row className="detail">

            <div className="hero-image-container" >
                <Image src={this.props.hero.thumbnail.path+'.'+this.props.hero.thumbnail.extension} />
            </div>
            <Jumbotron style={{width: "100%"}}>
                <h1>{this.props.hero.name}</h1>
                { this.props.hero.description !== "" ? <p>{this.props.hero.description}</p> : ""}

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
                        {this.props.hero.series.items.map( (comic, index) => (
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

const mapStateToProps = state => {
    return {
        error: state.error,
        hero: state.currentHero
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getCurrentHero: (_id) => dispatch(actions.getHero(_id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));
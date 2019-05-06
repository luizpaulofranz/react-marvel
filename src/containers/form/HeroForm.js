import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Button, Image } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';

import '../Common.css';
import './HeroForm.css';

class HeroForm extends React.Component {

    backClick = () => {
        this.props.history.goBack()
    }

    componentDidMount() {
        const { _id } = this.props.match.params; // to get the URL params
        this.props.getCurrentHero(_id);
    }
    
    // linkback in all returns
    render() {
        const Ret = <Button onClick={this.backClick} className="btn btn-primary link-back">Voltar</Button>;

        if(this.props.error) return (<div>{Ret}<br/>Error</div>);
        if(!this.props.hero) return (<div>{Ret}<br/>Loading</div>);

        
        return (
        <Form id="hero-form">
            {Ret}

            <div className="hero-image-container" >
                <Image src={this.props.hero.thumbnail.path+'.'+this.props.hero.thumbnail.extension} />
            </div>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" placeholder="My Name" defaultValue={this.props.hero.name} />
            </Form.Group>

            <Form.Group controlId="imageUrl">
                <Form.Label>Image URL</Form.Label>
                <Form.Control name="imageUrl" placeholder="http://www.example/uploads/my_image.jpg" defaultValue={`${this.props.hero.thumbnail.path}.${this.props.hero.thumbnail.extension}`} />
                <Form.Text>
                You must provide a hosted image.
                </Form.Text>
            </Form.Group>

            <Button variant="success" type="submit">
                Save
            </Button>
        </Form>)
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeroForm));
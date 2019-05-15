import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Button, Image } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';

import '../Common.css';
import './HeroForm.css';

class HeroForm extends React.Component {

    state = {
        id: this.props.match.params._id,
        name: "",
        imageUrl: ""
    }

    findCurrentHero = (_id) => {
        const hero = this.props.heroes.find( myHero => {
            if (myHero.id == _id)
                return myHero;
        });
        this.setState({name: hero.name, imageUrl: `${hero.thumbnail.path}.${hero.thumbnail.extension}`});
    }

    inputChange = (event, field) => {
        let curState = this.state;
        if (field === 'imageUrl') {
            const img = event.target.value;
            const ext = img.substr(img.length -3);
            const path = img.replace('.'+ext, '');
            if (ext === 'jpg' || ext === 'png') {
                curState[field] = `${path}.${ext}`;
            }
        } else {
            curState[field] = event.target.value;
        }
        this.setState(curState);
    }

    backClick = () => {
        this.props.history.goBack()
    }

    saveClick = () => {
        this.props.editHero(this.state);
    }

    componentWillMount() {
        const { _id } = this.props.match.params; // to get the URL params
        //this.props.getCurrentHero(_id);
        this.findCurrentHero(_id);
    }
    
    // linkback in all returns
    render() {
        const Ret = <Button onClick={this.backClick} className="btn btn-primary link-back">Voltar</Button>;

        if(this.props.error) return (<div>{Ret}<br/>Error</div>);
        if(this.state.name == "") return (<div>{Ret}<br/>Loading</div>);

        return (
        <Form id="hero-form">
            {Ret}

            <div className="hero-image-container" >
                <Image src={this.state.imageUrl} />
            </div>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    name="name" 
                    placeholder="My Name" 
                    value={this.state.name} 
                    onChange={(event) => this.inputChange(event, 'name')} 
                />
            </Form.Group>

            <Form.Group controlId="imageUrl">
                <Form.Label>Image URL</Form.Label>
                <Form.Control 
                    name="imageUrl" 
                    placeholder="http://www.example/uploads/my_image.jpg" 
                    value={this.state.imageUrl}
                    onChange={(event) => this.inputChange(event, 'imageUrl')} 
                />
                <Form.Text>
                You must provide a hosted image.
                </Form.Text>
            </Form.Group>
            
            <Button variant="success" onClick={this.saveClick}>
                Save
            </Button>
            
        </Form>)
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        heroes: state.heroes
    };
}

const mapDispatchToProps = dispatch => {
    return {
        editHero: (hero) => dispatch(actions.editHero(hero))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeroForm));
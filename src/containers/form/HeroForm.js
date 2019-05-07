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

    // todos esses controles por que com o getDerivedStateFromProps
    // ao alterarmos uma prop, automaticamente alteramos o estado
    inputChange = (event, field) => {
        let curState = this.state;
        if (field === 'imageUrl') {
            const img = event.target.value;
            const ext = img.substr(img.length -3);
            const path = img.replace('.'+ext, '');
            if (ext === 'jpg' || ext === 'png') {
                this.props.hero.thumbnail.path = path;
                this.props.hero.thumbnail.extension = ext;
                curState[field] = `${path}.${ext}`;
            }
        } else {
            this.props.hero[field] = event.target.value;
        }
        console.log(curState);
        this.setState(curState);
    }

    backClick = () => {
        this.props.history.goBack()
    }

    saveClick = () => {
        this.props.editHero(this.state);
    }

    // here we populate our state with redux props
    static getDerivedStateFromProps(nextProps, prevState){
        if (!nextProps.hero) {
            return null;
        }
        if ((nextProps.hero.name!==prevState.name) || (`${nextProps.hero.thumbnail.path}.${nextProps.hero.thumbnail.extension}`!==prevState.imageUrl)) {
          return { name: nextProps.hero.name, imageUrl: `${nextProps.hero.thumbnail.path}.${nextProps.hero.thumbnail.extension}`};
        } else return null;
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
                <Form.Control 
                    name="name" 
                    placeholder="My Name" 
                    value={(this.state.name) ? this.state.name : this.props.hero.name} 
                    onChange={(event) => this.inputChange(event, 'name')} 
                />
            </Form.Group>

            <Form.Group controlId="imageUrl">
                <Form.Label>Image URL</Form.Label>
                <Form.Control 
                    name="imageUrl" 
                    placeholder="http://www.example/uploads/my_image.jpg" 
                    value={(this.state.imageUrl) ? this.state.imageUrl : `${this.props.hero.thumbnail.path}.${this.props.hero.thumbnail.extension}`}
                    onChange={(event) => this.inputChange(event, 'imageUrl')} 
                />
                <Form.Text>
                You must provide a hosted image.
                </Form.Text>
            </Form.Group>
            {/* 
            <Button variant="success" onClick={this.saveClick}>
                Save
            </Button>
            */}
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
        getCurrentHero: (_id) => dispatch(actions.getHero(_id)),
        editHero: (hero) => dispatch(actions.editHero(hero))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeroForm));
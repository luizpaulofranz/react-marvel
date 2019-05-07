import React from 'react';
import { Row, Form, Col, Button } from 'react-bootstrap';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../store/actions/actions';

class Search extends React.Component {
    
    state = {
        term: ""
    }

    inputChange = (event) => {
        event.preventDefault();
        this.setState({term: event.target.value});
        setTimeout(this.doSearch, 600);
        
    }

    doSearch = () => {
        if (this.state.term.length > 2) {
            this.props.searchHero(this.state);
            if(this.props.location.pathname != '/') {
                this.props.history.push('/');
            }
        }
    }

    onCLearClick = () => {
        this.props.onInitState();
        this.setState({term: ""})
    }


    render() {
        return (
            <Form id="searchForm">
                <Form.Group as={Row} controlId="search">
                    <Col sm={9} xs={8}>
                        <Form.Control name="term" placeholder="Search by name ..." value={this.state.term} onChange={(event) => this.inputChange(event, 'imageUrl')}  />
                    </Col>
                    <Col sm={3} xs={4}>
                        <Button style={{marginTop: "-10px"}} variant="primary" onClick={this.onCLearClick}>Clear</Button>
                    </Col>
                </Form.Group>
            </Form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchHero: (term) => dispatch(actions.searchHero(term)),
        onInitState: () => dispatch(actions.initState())
    };
}

export default connect(null, mapDispatchToProps)(withRouter(Search));
import React, { Fragment } from 'react';
import { Row, Form, Col, Button } from 'react-bootstrap';

const Search = (prosp) => {

    return (
        <Form id="searchForm">
            <Form.Group as={Row} controlId="search">
                <Col sm={10} xs={9}>
                    <Form.Control name="term" placeholder="Search term ..." />
                </Col>
                <Col sm={2} xs={3}>
                    <Button variant="primary">Search</Button>
                </Col>
            </Form.Group>
        </Form>
    )
}

export default Search;
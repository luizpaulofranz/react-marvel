import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import './HeroCard.css';

import { Link } from 'react-router-dom';

const editClick = (props) => {
  props.history.push(`/edit/${props.hero.id}`);
}

const HeroCard = (props) => {
  //console.log(props);
  const { hero } = props;
  return (
    <Card >
      <Card.Img variant="top" src={hero.thumbnail.path+'.'+hero.thumbnail.extension} />
      <Card.Body>
        <div className="hero-content">
          <Card.Title><Link to={`/detail/${hero.id}`}>{hero.name}</Link></Card.Title>
          <Button variant="primary" onClick={() => editClick(props)}>Editar</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default withRouter(HeroCard);
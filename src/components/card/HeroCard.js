import React from 'react';
import { Card } from 'react-bootstrap';

import './HeroCard.css';

import { Link } from 'react-router-dom';

const HeroCard = (props) => {
  //console.log(props);
  const { hero } = props;
  return (
    <Card >
      <Card.Img variant="top" src={hero.thumbnail.path+'.'+hero.thumbnail.extension} />
      <Card.Body>
        <div className="hero-content">
          <Card.Title>
            <Link to={`/detail/${hero.id}`}>{hero.name}</Link>
          </Card.Title>
          <Link to={`/edit/${hero.id}`} className="btn btn-primary">Edit</Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default HeroCard;
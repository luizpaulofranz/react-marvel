import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './HeroCard.css';

const HeroCard = (props) => {
  console.log(props);
  const { hero } = props;
  return (
    <Card >
      <Card.Img variant="top" src={hero.thumbnail.path+'.'+hero.thumbnail.extension} />
      <Card.Body>
        <div className="hero-content">
          <Card.Title>{hero.name}</Card.Title>
          <Button variant="primary">Editar</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default HeroCard;
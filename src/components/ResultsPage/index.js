import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Card, CardColumns, Button } from 'react-bootstrap';
import { SEARCH } from '../../actions/search';
import { FAVORITES } from '../../actions/favorites';

const ResultsPage = (props) => {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();
  const history = useHistory();

  if (Object.keys(favorites).length < 1) {
    history.replace('/');
  }

  const startOver = () => {
    dispatch({ type: SEARCH.START_OVER });
    dispatch({ type: FAVORITES.START_OVER });
  };

  const score = Object.keys(favorites).reduce((sum, fav) => sum + Number(favorites[fav].weirdness), 0) / 5;

  return (
    <div className="results-page">
      <h3>{`You scored an ${Math.round(score)} out of 10 on the weirdness scale!`}</h3>
      <strong>The GIFs you liked</strong><br />
      <div className="card-wrapper">
        {Object.keys(favorites).map((fav, i) => (
          <Card key={i}>
            <Card.Img variant="top" src={favorites[fav].result.images.original.url} />
            <Card.Body>{favorites[fav].result.title}</Card.Body>
            <Card.Footer>{favorites[fav].weirdness}/10</Card.Footer>
          </Card>
        ))}
      </div>
      <Button onClick={startOver}>
        <i class="fas fa-redo"></i> Start Over
      </Button>
    </div>
  );
};

export default ResultsPage;

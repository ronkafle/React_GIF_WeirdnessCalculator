import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Thumbnail from '../Thumbnail';
import { Col, Row, Container, Button } from 'react-bootstrap';
import { MIN_LIKED_GIFS } from '../../configs/constants';
import { FAVORITES } from '../../actions/favorites';
import { SEARCH } from '../../actions/search';

const Favorites = () => {

  const favorites = useSelector(state => state.favorites);
  const query = useSelector(state => state.search.query);  
  const gifsNeeded = MIN_LIKED_GIFS - Object.keys(favorites).length;
  const dispatch = useDispatch();
  const history = useHistory();

  const onRemove = (term) => {
    dispatch({
      type: FAVORITES.REMOVE,
      payload: {
        term,
      }
    });
    if (term === query) {
      dispatch({
        type: SEARCH.LIKED,
        payload: false
      });
    }
  };

  const calculateScore = (e) => {
    history.push('/result');
  };

  return (
    <Container className="favorites">
      <h2>YOUR LIKED GIFS</h2>
      <Row>
        {Object.keys(favorites).map((f, i) => (
          <Col key={i}>
            <Thumbnail
              title={favorites[f].result.title}
              src={favorites[f].result.images.original.url}
              onCancel={() => onRemove(f)} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col className="favorites-footer">
          <Button onClick={calculateScore} disabled={gifsNeeded} className="btn btn-primary">
            Calculate My Weirdness Score
        </Button>
          {
            gifsNeeded > 1
              ? <p>You must <i>Like</i> {`${gifsNeeded} more GIF${gifsNeeded > 1 ? 's' : ''}`} to calculate your score</p>
              : null
          }
        </Col>
      </Row>
    </Container>
  );
};

export default Favorites;

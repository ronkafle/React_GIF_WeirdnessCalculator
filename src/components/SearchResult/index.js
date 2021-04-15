import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Image, Button, Row, Col, Alert } from "react-bootstrap";
import { FAVORITES } from '../../actions/favorites';
import { SEARCH } from '../../actions/search';

const SearchResult = () => {
  const result = useSelector(state => state.search.result);
  const liked = useSelector(state => state.search.liked);
  const query = useSelector(state => state.search.query);
  const loading = useSelector(state => state.search.loading);
  const weirdness = useSelector(state => state.search.weirdness);
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch({
      type: SEARCH.LIKED,
      payload: true
    });
    dispatch({
      type: FAVORITES.ADD,
      payload: {
        term: query,
        weirdness,
        result: result,
      }
    });
  }


  return (
    query
    && <Row className="search-result">
      {loading
        && <Col>
          <div className="loading">
            <Image src="/throbber_12.gif" />
          </div>
        </Col>
      }
      {!loading
        && result.images
        && <Col>
          <h2>Your Result</h2>
          <p>{result.title}</p>
          <Image src={result.images.original.url} />
          <Button disabled={favorites[query]} onClick={handleLike}>
            <i class="fas fa-thumbs-up"></i> Like
          </Button>
          {!liked
            && favorites[query]
            && <Alert className="msg-box" variant="info">
              <strong>Try something different.</strong><br />
              You have already liked a GIF for this search term.
              </Alert>
          }
          {liked
            && <Alert className="msg-box" variant="success">
              <strong>Well Done!</strong><br />
              We have added this GIF to your Favorites. Now, search for more.
              </Alert>
          }
        </Col>
      }
    </Row >
  );
};

export default SearchResult;

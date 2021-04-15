import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, FormControl } from 'react-bootstrap';
import { debounce } from '../../utils';
import { SEARCH } from '../../actions/search';

const SearchSlider = (props) => {
  const { weirdness, rating, limit, query, result } = useSelector(state => state.search);
  const dispatch = useDispatch();

  const updateSearch = debounce((value) => dispatch({ 
    type: SEARCH.BEGIN, 
    payload: { 
      query, rating, limit, weirdness: value 
    }
  }), 250);

  const onChange = (e) => {
    updateSearch(e.target.value);
  };

  return (
    query
      ? <Row className="search-slider">
        <Col>
          <strong>Weirdness!</strong><br/>
          <p>Move the slider to increase the weirdness and receive weirder and weirder results.</p>
          <input className="slider" type="range" min="0" max="10" value={weirdness} onChange={onChange} />
          <div className="range">
            {(new Array(11).fill(0)).map((_, i) => <span>{i}</span>)}
          </div>
          <br/>
          <p>{`Weirdness: ${weirdness}`}</p>
        </Col>
      </Row>
      : null
  );
};

export default SearchSlider;

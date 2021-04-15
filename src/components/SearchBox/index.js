import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Form, Col, FormControl, Button } from "react-bootstrap";
import { SEARCH } from "../../actions/search";
import { debounce } from "../../utils";

const SearchBox = () => {
  const weirdness = useSelector(state => state.search.weirdness);
  const dispatch = useDispatch();

  const updateSearch = debounce((value) => dispatch({
    type: SEARCH.BEGIN,
    payload: {
      query: value,
      weirdness
    }
  }), 250);

  const onChange = (e) => {
    updateSearch(e.target.value);
  };

  return (
    <Form className="search-box">
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label className="text-bold"><b>Search term</b></Form.Label>
          <FormControl onChange={onChange} />
        </Form.Group>
        <Form.Group as={Col} style={{ alignItems: 'flex-end', display: 'flex' }}>
          <Button>Search</Button>
        </Form.Group>
      </Form.Row>
    </Form >
  );
};

export default SearchBox;
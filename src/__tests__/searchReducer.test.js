import React from 'react';
import favoritesReducer from "../reducers/favoritesReducer";
import { FAVORITES } from '../actions/favorites';
import { SEARCH } from '../actions/search';
import searchReducer from '../reducers/searchReducer';

describe('Reducer: Search', () => {

  it('should update the search query', () => {
    const action = {
      type: SEARCH.UPDATE,
      payload: {
        query: 'some query',
        weirdness: 4,
        liked: {}
      }
    }
    const state = {
      query: '',
      weirdness: 0,
      liked: {},
      result: {},
      loading: true,
    };
    const newState = searchReducer(state, action);
    expect(newState).toEqual({
      query: 'some query',
      weirdness: 4,
      liked: false,
      result: {},
      loading: true,
    });
  });

  it('should change the weirdness of the current query', () => {
    const action = {
      type: SEARCH.WEIRDNESS,
      payload: 4
    }
    const state = {
      query: 'some query',
      weirdness: 2,
      liked: {},
      result: {},
      loading: true,
    };
    const newState = searchReducer(state, action);
    expect(newState).toEqual({
      query: 'some query',
      weirdness: 4,
      liked: {},
      result: {},
      loading: true,
    })
  });

  it('should reset the search result, query and weirdness', () => {
    const action = {
      type: SEARCH.START_OVER
    }
    const state = {
      query: 'some query',
      weirdness: 10,
      liked: {},
      result: {},
      loading: false,
    };
    const newState = searchReducer(state, action);
    expect(newState).toEqual({
      query: '',
      weirdness: 0,
      liked: {},
      result: {},
      loading: false,
    });
  });

});
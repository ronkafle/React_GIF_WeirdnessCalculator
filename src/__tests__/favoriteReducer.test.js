import React from 'react';
import favoritesReducer from "../reducers/favoritesReducer";
import { FAVORITES } from '../actions/favorites';

describe('Reducer: Favorites', () => {

  it('should add the item to user\'s favorites', () => {
    const action = {
      type: FAVORITES.ADD,
      payload: { term: 'some query', result: 'some result' }
    }
    const state = {};
    const newState = favoritesReducer(state, action);
    expect(newState).toEqual({
      [action.payload.term]: action.payload
    })
  });

  it('should remove the item from user\'s favorites', () => {
    const action = {
      type: FAVORITES.REMOVE,
      payload: { term: 'some query' }
    }
    const state = {
      [action.payload.term]: 'Some result'
    };
    const newState = favoritesReducer(state, action);
    expect(newState).toEqual({})
  });

  it('should remove all the favorites', () => {
    const action = {
      type: FAVORITES.START_OVER
    }
    const state = {
      'some query': 'Some result'
    };
    const newState = favoritesReducer(state, action);
    expect(newState).toEqual({});
  });

});
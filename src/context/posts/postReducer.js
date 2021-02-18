import {
    ADD_COLLECTION_ITEM,
    UPDATE_COLLECTION_STATE,
    GET_COLLECTION_ITEMS,
  } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
      case ADD_COLLECTION_ITEM:
        return {
          ...state,
          ...action.payload,
        };
      case UPDATE_COLLECTION_STATE:
        return {
          ...state,
          ...action.payload,
        };
      case GET_COLLECTION_ITEMS:
        return {
          ...state,
          collectionItems: [...action.payload],
        };
      default:
        return state;
    }
  };
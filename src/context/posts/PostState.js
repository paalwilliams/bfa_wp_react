import React, { useReducer } from 'react';
import postReducer from './postReducer';
import PostContext from './postContext';

import {
  ADD_COLLECTION_ITEM,
} from '../types';


const PostState = (props) => {
  const initialState = {
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  // Add Collection Items

  const updateCollectionState = (e) => {
    try {
      dispatch({
        type: ADD_COLLECTION_ITEM,
        payload: {
          [e.target.name]: e.target.value
          
        },
      });
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <PostContext.Provider
      value={{
        collectionItems: state.collectionItems,
        updateCollectionState,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
export default PostState;
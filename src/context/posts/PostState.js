import React, { useReducer } from 'react';
import postReducer from './postReducer';
import PostContext from './postContext';

import {
   GET_POSTS,
   GET_MENU,
   GET_SINGLE_PAGE,
   GET_SINGLE_POST,
   GET_SITE_IDENTITY,
   ERROR
} from '../types';


const PostState = (props) => {
  const initialState = {
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  // Get All Posts

  const getPosts = () => {
      fetch('/wp-json/wp/v2/posts')
      .then( response => response.json() )
      .catch(err => {
        dispatch({
            type: ERROR, 
                payload: {
                    err: "Error retrieving posts. Please try again later."
                }
        })
    })
      .then( data => {
        dispatch({
          type: GET_POSTS,
          payload: {
            posts: data
          },
        });
      })
  };

  const getSinglePage = (slug) => {
      fetch(`/wp-json/wp/v2/pages?slug=${slug}`)
      .then( response => response.json() )
      .catch(err => {
        dispatch({
            type: ERROR, 
                payload: {
                    err: "Error retrieving page. Please try again later."
                }  
        })
      })
      .then( data => {
        dispatch({
          type: GET_SINGLE_PAGE,
          payload: {
            post: data[0]
          },
        });
      } )
  };

  const getSinglePost = (slug) => {
      fetch(`/wp-json/wp/v2/posts?slug=${slug}`)
      .then( response => response.json() )
      .catch(err => {
        dispatch({
            type: ERROR, 
                payload: {
                    err: "Error retrieving post. Please try again later."
                }  
        })
      })
      .then( data => {
        dispatch({
          type: GET_SINGLE_POST,
          payload: {
            post: data[0]
          },
        });
      })     
    }

    const getSiteIdentity = () => {
        fetch('/wp-json/')
        .then( response => response.json() )
        .catch(err => {
            dispatch({
                type: ERROR, 
                    payload: {
                        err: "Error retrieving site identity. Please try again later."
                    }  
            })
          })
        .then( data => {
            dispatch({
                type: GET_SITE_IDENTITY,
                payload: {
                  identity: data
                }
              })
        } )
    }

  const getMenu = () => {
      fetch('/wp-json/wp/v2/menu')
      .then( response => response.json() )
      .catch(err => {
        dispatch({
            type: ERROR, 
                payload: {
                    err: "Error retrieving menu. Please try again later."
                }  
        })
      })
      .then( data => {
        dispatch({
          type: GET_MENU,
          payload: {
            menu: data
          }
        })
      } )
  }


  return (
    <PostContext.Provider
      value={{
        state,
        getPosts,
        getSinglePage,
        getSinglePost,
        getMenu,
        getSiteIdentity
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
export default PostState;
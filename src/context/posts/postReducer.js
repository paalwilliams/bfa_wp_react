import {
    GET_POSTS,
    GET_SINGLE_PAGE,
    GET_SINGLE_POST,
    GET_MENU,
    ERROR,
    GET_SITE_IDENTITY
  } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
      case GET_POSTS:
        return {
          ...state,
          ...action.payload,
        };
      case GET_MENU: 
        return {
            ...state,
            ...action.payload
        }
      case GET_SINGLE_PAGE:
        return {
            ...state,
            ...action.payload
        }
      case GET_SINGLE_POST:
        return {
            ...state,
            ...action.payload
        }
      case GET_SITE_IDENTITY:
          return {
              ...state,
              ...action.payload
          }
        case ERROR: {
            return {
                ...state,
                ...action.payload
            }
        }
      default:
        return state;
    }
  };
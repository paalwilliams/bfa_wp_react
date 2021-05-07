import React, { useReducer } from 'react'
import postReducer from './postReducer'
import PostContext from './postContext'

import {
    GET_POSTS,
    GET_MENU,
    GET_SINGLE_PAGE,
    GET_SINGLE_POST,
    GET_SITE_IDENTITY,
    ERROR,
    CLEAR_PAGE
} from '../types'

const PostState = (props) => {
    const initialState = {
    }

    const [state, dispatch] = useReducer(postReducer, initialState)

    // Get All Posts

    const getPosts = () => {
        fetch('/wp-json/wp/v2/posts')
            .then(response => response.json())
            .catch(err => {
                console.log(err)
                dispatch({
                    type: ERROR,
                    payload: {
                        err: 'Error retrieving posts. Please try again later.'
                    }
                })
            })
            .then(data => {
                dispatch({
                    type: GET_POSTS,
                    payload: {
                        posts: data
                    }
                })
            })
    }

    const getSinglePage = (slug) => {
        fetch(`/wp-json/wp/v2/pages?slug=${slug}`)
            .then(response => response.json())
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: {
                        err: 'Error retrieving page. Please try again later.'
                    }
                })
            })
            .then(data => {
                dispatch({
                    type: GET_SINGLE_PAGE,
                    payload: {
                        page: data[0]
                    }
                })
            })
    }

    const getSinglePost = (slug) => {
        fetch(`/wp-json/wp/v2/posts?slug=${slug}`)
            .then(response => response.json())
            .catch(err => {
                console.log(err)
                dispatch({
                    type: ERROR,
                    payload: {
                        err: 'Error retrieving post. Please try again later.'
                    }
                })
            })
            .then(data => {
                dispatch({
                    type: GET_SINGLE_POST,
                    payload: {
                        post: data[0]
                    }
                })
            })
    }

    const getSiteIdentity = () => {
        fetch('/wp-json/')
            .then(response => response.json())
            .catch(err => {
                console.log(err)
                dispatch({
                    type: ERROR,
                    payload: {
                        err: 'Error retrieving site identity. Please try again later.'
                    }
                })
            })
            .then(data => {
                dispatch({
                    type: GET_SITE_IDENTITY,
                    payload: {
                        identity: data
                    }
                })
            })
    }

    const getFrontPage = () => {
        fetch('/wp-json/wp/v2/frontpage')
            .then((response) => {
                return response.json()
            })
            .catch((err) => {
                console.log(err)
                dispatch({
                    type: ERROR,
                    payload: {
                        err: "error retrieving home page."
                    }
                })
            }).then((data) => {
                console.log(data)
                dispatch({
                    type: GET_SINGLE_PAGE,
                    payload: {
                        page: data
                    }
                })
            })
    }

    const getMenu = () => {
        fetch('/wp-json/wp/v2/menu')
            .then(response => response.json())
            .catch(err => {
                console.log(err)
                dispatch({
                    type: ERROR,
                    payload: {
                        err: 'Error retrieving menu. Please try again later.'
                    }
                })
            })
            .then(data => {
                dispatch({
                    type: GET_MENU,
                    payload: {
                        menu: data
                    }
                })
            })
    }

    const pageStateDebounce = () => {

        return new Promise((resolve, reject) => {
            dispatch({
                type: CLEAR_PAGE,
                payload: {
                    page: null
                }
            })
            resolve();
        })
    }

    return (
        <PostContext.Provider
            value={{
                state,
                getPosts,
                getSinglePage,
                getSinglePost,
                getMenu,
                getSiteIdentity,
                getFrontPage,
                pageStateDebounce
            }}
        >
            {/* eslint-disable-next-line react/prop-types */}
            {props.children}
        </PostContext.Provider>
    )
}
export default PostState

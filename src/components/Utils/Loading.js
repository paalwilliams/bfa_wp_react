import React, { useContext } from 'react';
import PostContext from '../../context/posts/postContext';
import { Redirect } from 'react-router-dom'

const Loading = () => {

    const postContext = useContext(PostContext)

    const { state } = postContext

    // if (state.err) {
    //     return <Redirect to="/404" />
    // }
    // else {

    return (
        < div >
            Loading........
        </div >
    )
    // }
}

export default Loading

const { react, useEffect, useContext } = wp.element;
import PostContext from '../../context/posts/postContext'
import PostExcerpt from './PostExcerpt';
import Error from '../Utils/Error'

export const Posts = () => {

    const postContext = useContext(PostContext);

    const { getPosts, state } = postContext;

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="posts-container">
            {state.err ? <Error msg={state.err}/> : ''}
            {state.posts ? state.posts.map((post) => {
                return <PostExcerpt content={post} />
            }) : ''}
        </div>
    )
}

export default Posts
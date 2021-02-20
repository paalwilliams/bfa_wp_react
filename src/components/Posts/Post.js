const { react, useEffect, useContext } = wp.element;
import {useParams} from "react-router-dom";
import PostContext from '../../context/posts/postContext';

export const Post = () => {

    const postContext = useContext(PostContext);

    const { getSinglePost, state } = postContext;

    const {slug} = useParams()

    useEffect(() => {
        getSinglePost(slug);
    }, [])

    return (
        <div>
            <div className="post">
                <h2>title</h2>
        </div>
        </div>
    )
}

export default Post
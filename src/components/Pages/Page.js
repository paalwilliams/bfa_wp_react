const { react, useEffect, useContext } = wp.element;
import {useParams} from "react-router-dom";
import PostContext from '../../context/posts/postContext';

const Page = () => {
    const {page} = useParams()
    const postContext = useContext(PostContext);

    const { getSinglePage, state } = postContext;

    useEffect(() => {
        getSinglePage(page);
    }, [])

    return (
        <div>
            {page}
        </div>
    )
}

export default Page

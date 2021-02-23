import { useParams } from 'react-router-dom'
import PostContext from '../../context/posts/postContext'
import Utils from '../../utils/Utils'
const { React, useEffect, useContext } = wp.element

export const Post = () => {
  const postContext = useContext(PostContext)

  const { getSinglePost, state } = postContext

  const { slug } = useParams()

  useEffect(() => {
    getSinglePost(slug)
  }, [])

  if (state.post) {
    const { content, date, title } = state.post
    return (
          <div>
              <h2>{title.rendered}</h2>
              <p>{Utils.formatPostDate(date)}</p>
              <div dangerouslySetInnerHTML={Utils.createMarkup(content.rendered)}></div>
          </div>
    )
  } else {
    return (
        <div>
            <p>
                Loading....
            </p>
        </div>
    )
  }
}

export default Post

import { useParams } from 'react-router-dom'
import Utils from '../../utils/Utils'
import PostContext from '../../context/posts/postContext'

const { React, useEffect, useContext } = wp.element

const Page = () => {
  const { page } = useParams()
  const postContext = useContext(PostContext)
  console.log(page)

  const { getSinglePage, state } = postContext

  useEffect(() => {
    getSinglePage(page)
  }, [])

  if (state.page) {
    return (
        <div>
            <h2>{state.page.title.rendered}</h2>
            <div dangerouslySetInnerHTML={Utils.createMarkup(state.page.content.rendered)}>

            </div>
        </div>
    )
  } else {
    return (
          <div>Not Loaded </div>
    )
  }
}

export default Page

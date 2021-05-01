import { useParams } from 'react-router-dom'
import Utils from '../../utils/Utils'
import PostContext from '../../context/posts/postContext'
import Loading from '../../components/Utils/Loading'
const { React, useEffect, useContext } = wp.element

const Page = () => {
  const { page } = useParams()
  const postContext = useContext(PostContext)

  const { getSinglePage, state, getFrontPage } = postContext

  useEffect(() => {
      page ? getSinglePage(page) : getFrontPage()
  }, [])

  if (state.page) {
    if (state.identity) {
      document.title = `${state.page.title.rendered} | ${state.identity.name}`
    }
    return (
        <div>
            <h2 className="page-title">{state.page.title.rendered}</h2>
            <div dangerouslySetInnerHTML={Utils.createMarkup(state.page.content.rendered)}>

            </div>
        </div>
    )
  } else {
    return (
          <Loading />
    )
  }
}

export default Page

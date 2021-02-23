/* eslint-disable react/prop-types */
import Utils from '../../utils/Utils'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
const { React } = wp.element

const PostExcerpt = (props) => {
  const { title, slug, date, excerpt } = props.content
  return (
        <div className="post">
            <Link to={slug}><h2>{title.rendered}</h2></Link>
            <p>{Utils.formatPostDate(date)}</p>
            <p dangerouslySetInnerHTML={Utils.createMarkup(excerpt.rendered)}></p>
        </div>
  )
}

PostExcerpt.PropTypes = {
  title: PropTypes.object,
  slug: PropTypes.string,
  content: PropTypes.any,
  date: PropTypes.date,
  excerpt: PropTypes

}

export default PostExcerpt

import React from 'react';
import Utils from '../../utils/Utils';
import {Link} from 'react-router-dom';
  
const PostExcerpt = (props) => {
    const {title, slug, content, date, excerpt } = props.content;
    return (
        <div className="post">
            <Link to={slug}><h2>{title.rendered}</h2></Link>
            <p>{Utils.formatPostDate(date)}</p>
            <p dangerouslySetInnerHTML={Utils.createMarkup(excerpt.rendered)}></p>
        </div>
    )
}

export default PostExcerpt


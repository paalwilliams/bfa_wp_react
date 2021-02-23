import PostContext from '../../context/posts/postContext'
import { Link } from 'react-router-dom'
const { React, useEffect, useContext } = wp.element

const Menu = () => {
  const postContext = useContext(PostContext)

  const { getMenu, state } = postContext

  const { menu } = state

  useEffect(() => {
    getMenu()
  }, [])
  return (
        <div>
            <ul id="menu-main-menu">
            {menu
              ? menu.map(({ url, title }) => {
                const { pathname } = new URL(url)
                return <li key={title}><Link to={pathname}>{title}</Link></li>
              })
              : ''}
            </ul>
        </div>
  )
}

export default Menu

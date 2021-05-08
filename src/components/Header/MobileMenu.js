import PostContext from '../../context/posts/postContext'
import { Link } from 'react-router-dom'
const { React, useEffect, useContext, useRef } = wp.element

const MobileMenu = () => {
    const postContext = useContext(PostContext)

    const { getMenu, state } = postContext

    const { menu } = state

    const hamburgerRef = useRef()

    useEffect(() => {
        getMenu()
    }, [])

    const toggleHamburger = () => {
        hamburgerRef.current.classList.toggle('rotate')
    }
    return (
        <div>
            <div id="hamburger" ref={hamburgerRef} onClick={toggleHamburger}>
                <div className="patty"></div>
                <div className="patty"></div>
                <div className="patty"></div>
            </div>
            <ul id="menu-main-menu">

                {menu
                    ? menu.map(({ url, title }) => {
                        const { host } = new URL(window.location);
                        const { pathname } = new URL(url)
                        if (!url.includes(host)) {
                            return <li key={title}><a href={url} target="_blank">{title}</a></li>
                        }
                        return <li key={title}><Link to={pathname}>{title}</Link></li>
                    })
                    : ''}
            </ul>
        </div>
    )
}

export default MobileMenu

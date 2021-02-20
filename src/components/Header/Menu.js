import React, { useEffect, useContext } from 'react'
import PostContext from '../../context/posts/postContext';
import { Link } from 'react-router-dom';

const Menu = () => {

    const postContext = useContext(PostContext);

    const { getMenu, state } = postContext;

    const {menu} = state

    useEffect(() => {
        getMenu()
    }, [])
    return (
        <div>
            <ul id="menu-main-menu">
            {menu ? menu.map(({url, title}) => {
                let {pathname} = new URL(url)
                return <li><Link to={pathname}>{title}</Link></li>
            }) : ''}
            </ul>
        </div>
    )
}

export default Menu

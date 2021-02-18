import React, { useEffect, useState, useContext } from 'react'
import PostContext from '../../context/posts/postContext';
import { Link } from 'react-router-dom';

const Menu = () => {

    const postContext = useContext(PostContext);

    const { updateCollectionState, addCollectionItem } = postContext;

    const handleChange = (e) => {
        updateCollectionState(e);
      };

    let [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        fetch('/wp-json/wp/v2/menu')
            .then( response => response.json() )
            .then( data => {
                setMenuItems(data)
            } )
    }, [])
    return (
        <div>
            <ul id="menu-main-menu">
            {menuItems ? menuItems.map(({url, title}) => {
                let {pathname} = new URL(url)
                return <li><Link to={pathname}>{title}</Link></li>
            }) : ''}
            </ul>
            {/* <input type="text" name="amrk" onChange={handleChange}/> */}
        </div>
    )
}

export default Menu

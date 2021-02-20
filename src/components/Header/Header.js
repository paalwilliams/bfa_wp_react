import React, {Fragment, useContext, useEffect} from 'react'
import Menu from './Menu';
import Logo from './Logo';
import PostContext from '../../context/posts/postContext'

const Header = () => {

    const postContext = useContext(PostContext);

    const { getSiteIdentity, state } = postContext;

    useEffect(() => {
        getSiteIdentity();
    }, [])

    return (
        <header id="header">
            { state.identity ? <Logo name={state.identity.name}/> : ''}
            <Menu />
        </header>
    )
}

export default Header
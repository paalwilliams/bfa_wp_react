const { render, useState, Fragment } = wp.element;
import React from 'react';
import Header from './components/Header/Header'
import PostState from './context/posts/PostState';
import {BrowserRouter as Router } from 'react-router-dom'

const Index = () => {
    return (
        <>
        <Router>
             <PostState>
                    <Header />
            </PostState>
        </Router> 
        </>
    )
}

render(<Index />, document.getElementById('header-root'));
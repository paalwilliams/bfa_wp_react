const { render} = wp.element;
import React from 'react';
import Header from './components/Header/Header'
import PostState from './context/posts/PostState';
import {BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import Posts from './components/Posts/Posts'
import Post from './components/Posts/Post'
import Contact from './components/Pages/Contact'
import Page from './components/Pages/Page'

const Index = () => {

    let history = useHistory();

    window.onbeforeunload = function() {
        localStorage.setItem('last', 'dog')
    }
    return (
        <>
        <Router>
             <PostState>
                    <Header />
                        <Switch>
                            <Route path="/contact" component={Contact}/>
                            <Route exact path="/blog/:slug" component={Post}/>
                            <Route path="/blog" component={Posts}/>
                            <Route path="/:page" component={Page}/>
                        </Switch>
            </PostState>
        </Router> 
        </>
    )
}

render(<Index />, document.getElementById('content-root'));
import React from 'react'
import Header from './components/Header/Header'
import PostState from './context/posts/PostState'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Posts from './components/Posts/Posts'
import Post from './components/Posts/Post'
import Page from './components/Pages/Page'
import NotFound from './components/Utils/NotFound'
import Footer from './components/Footer/Footer';
const { render } = wp.element

const Index = () => {
    return (
        <>
            <Router>
                <PostState>
                    <Header />
                    <Switch>
                        <Route path="/blog/:slug" component={Post} />
                        <Route path="/blog" component={Posts} />
                        <Route path="/:page" component={(props) => <Page key={window.location.pathname} />} />
                        <Route path="/" component={(props) => <Page key={"home"} />} />
                        <Route component={NotFound} />
                    </Switch>
                </PostState>
            </Router>
            <Footer />
        </>
    )
}

render(<Index />, document.getElementById('content-root'))

import React from 'react'
import Header from './components/Header/Header'
import PostState from './context/posts/PostState'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Posts from './components/Posts/Posts'
import Post from './components/Posts/Post'
import Contact from './components/Pages/Contact'
import Page from './components/Pages/Page'
import NotFound from './components/Utils/NotFound'
import Home from './components/Pages/Home'
const { render } = wp.element

const Index = () => {
  return (
        <>
        <Router>
             <PostState>
                    <Header />
                        <Switch>
                            <Route path="/contact" component={Contact}/>
                            <Route path="/blog/:slug" component={Post}/>
                            <Route path="/blog" component={Posts}/>
                            <Route path="/:page" component={Page}/>
                            <Route exact path="/" component={Home}/>
                            <Route component={NotFound} />
                        </Switch>
            </PostState>
        </Router>
        </>
  )
}

render(<Index />, document.getElementById('content-root'))

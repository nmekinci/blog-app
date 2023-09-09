
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Auth from '../pages/Auth'
import PrivateRouter from './PrivateRouter'
import Profile from '../pages/Profile'
import NewBlog from '../pages/NewBlog'
import About from '../pages/About'
import MyBlog from '../pages/MyBlog'
import BlogDetail from '../pages/BlogDetail'
import NotFound from '../pages/NotFound'
import BlogForm from '../components/blog/BlogForm'


const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/auth' element={<Auth/>}/>
            <Route  element={<PrivateRouter/>}>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/new-blog' element={<NewBlog/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='/my-blog' element={<MyBlog/>}/>
                <Route path='/blog-detail' element={<BlogDetail/>}/>
                <Route path='/details/:id' element={<BlogDetail/>}/>
                <Route path='/blog-form' element={<BlogForm/>}/>
                <Route path='*' element={<NotFound/>}/>

            </Route>
        </Routes>
    </div>
  )
}

export default AppRouter
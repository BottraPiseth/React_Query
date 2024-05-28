import React, { useState } from 'react'
import './App.css'
import PostList from './components/post-list'


function App() {

  return (
    <div>
        <h2 className='title'>
       My Post
        </h2>
        <PostList/>
    </div>
  )
}

export default App;

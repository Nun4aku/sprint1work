import React, {useState} from 'react';
import PostList from './components/PostList';
import '../src/App.css'
import MyInput from './components/UI/input/MyInput';
import MyButton from './components/UI/button/MyButton';
import PostForm from './components/PostForm';

function App() {

  const [posts, setPosts] = useState ([
    { id: 1, title: 'заголовок', body: 'texttexttext' },
    { id: 2, title: 'заголовок2', body: 'texttexttext2' },
    { id: 3, title: 'заголовок2', body: 'texttexttext3' },

  ])

  
  const createPost = (newPost) => {
    setPosts ( [...posts, newPost] )
  }

  


  return (
    <div className="app">

      <PostForm create={createPost}/>


      <PostList 
        posts={posts} 
        PostListTitle="список постов"/>
    </div>
  );
}

export default App;

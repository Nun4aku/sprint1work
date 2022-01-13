import React, {useState} from 'react';
import PostList from './components/PostList';
import '../src/App.css'
import MyInput from './components/UI/input/MyInput';
import MyButton from './components/UI/button/MyButton';
import PostForm from './components/PostForm';
import noPosts from './img/noPosts.png';

function App() {

  const [posts, setPosts] = useState ([
    { id: 1, title: 'заголовок', body: 'texttexttext' },
    { id: 2, title: 'заголовок2', body: 'texttexttext2' },
    { id: 3, title: 'заголовок2', body: 'texttexttext3' },

  ])

  
  const createPost = (newPost) => {
    setPosts ( [...posts, newPost] )
  }

  const removePost = (post) => {
    setPosts ( posts.filter (p => p.id !== post.id) )
  }

  


  return (
    <div className="app">

      <PostForm create={createPost}/>
      
      {
        posts.length !== 0
        ? <PostList 
            remove = {removePost}
            posts={posts} 
            PostListTitle="список постов"
          />
        : <div className='noPosts'><img src={noPosts} alt="noPosts" /></div>

      }


      
    </div>
  );
}

export default App;

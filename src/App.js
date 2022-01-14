import React, {useState} from 'react';
import PostList from './components/PostList';
import '../src/App.css'
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import noPosts from './img/noPosts.png';

function App() {

  //стейт с постами
  const [posts, setPosts] = useState ([
    { id: 1, title: 'Aзаголовок', body: 'R_texttexttext' },
    { id: 2, title: '1заголовок2', body: 'T_texttexttext2' },
    { id: 3, title: 'Tзаголовок2', body: 'S_texttexttext3' },

  ])

  const [selectedSort, setSelectedSort] = useState('')

  //создание нового поста
  const createPost = (newPost) => {
    setPosts ( [...posts, newPost] )
  }

  //удаление поста
  const removePost = (post) => {
    setPosts ( posts.filter (p => p.id !== post.id) )
  }

  //функция сортировки
  const sortPost = (sort) => {
    setSelectedSort(sort);
    //setPosts( [...posts].sort( (a,b) => a[sort].localeCompare(b[sort])))
    setPosts( [...posts].sort( (a,b) => a[sort] - b[sort] ? 1 : -1))

  }
  

  return (
    <div className="app">

      <PostForm create={createPost}/>
      
      <div style={{margin: '15px'}}></div>

      <div>
        <MySelect
          value = {selectedSort}
          onChange={sortPost}
          defaultValue = "Сортировать по:"
          options = {[
            {value: 'title', name: 'по названию'},
            {value: 'body', name: 'по описанию'}
          ]}
        />
      </div>



      {
        posts.length !== 0
        ? <PostList 
            remove = {removePost}
            posts = {posts} 
            PostListTitle="список постов"
          />
        : <div className='noPosts'><img src={noPosts} alt="noPosts" /></div>
      }


      
    </div>
  );
}

export default App;

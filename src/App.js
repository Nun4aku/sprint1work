import React, {useState, useMemo} from 'react';
import PostList from './components/PostList';
import '../src/App.css'
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import noPosts from './img/noPosts.png';
import MyInput from './components/UI/input/MyInput';
import axios from 'axios';

function App() {

  //стейт с постами
  const [posts, setPosts] = useState ([
    { id: 1, title: 'Aзаголовок', body: 'R_texttexttext' },
    { id: 2, title: '1заголовок2', body: 'T_texttexttext2' },
    { id: 3, title: 'Tзаголовок2', body: 'S_texttexttext3' },

  ])

  async function fetchPosts() {


    const response = await axios.get('http://localhost:3000/api/tasks?access_token=vkXFokDADQDFunWPRlCpLxPaVbECCR80B5S8S6LGmqHokgGihFMffuijmcE21A5T')
    console.log(response)
    setPosts(response.data)
  }
  

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')



  //использовал useMemo для сортировки массива постов
  //колбек вызвается, если изменяются посты posts или выбранный метод сортировки selectedSort
  const sortedPosts = useMemo( () => {
    console.log ('отработала сортировка')
    if (selectedSort) {
      return [...posts].sort( (a,b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts

  }, [selectedSort, posts])

  
  //отсортированные и отфильтрованный поиском массив
  const sortedAndSearchPosts = useMemo( () => {

    return sortedPosts.filter( post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))

  }, [searchQuery, sortedPosts])

  
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
  }
  

  return (
    <div className="app">
      
      <button onClick = {fetchPosts} >Get Posps</button>

      <PostForm create={createPost}/>
      
      <div style={{margin: '15px'}}></div>

      <div className='panelPostNav'>
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
        <div>
          <MyInput
            value = {searchQuery}
            onChange = {e => setSearchQuery(e.target.value)}
            placeholder="search"
          />
        </div>
      </div>


      {/*Список всех постов*/}
      {
        //проверяем массив отсортерованных постов не пут ли он
        sortedAndSearchPosts.length !== 0
        ? <PostList 
            remove = {removePost}
            posts = {sortedAndSearchPosts} 
            PostListTitle="список постов"
          />
        : <div className='noPosts'><img src={noPosts} alt="noPosts" /></div>
      }
    </div>
  );
}

export default App;
import React, {useState, useMemo} from 'react';
import PostList from './components/PostList';
import '../src/App.css'
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import noPosts from './img/noPosts.png';
import MyInput from './components/UI/input/MyInput';

function App() {

  //стейт с постами
  const [posts, setPosts] = useState ([
    { id: 1, title: 'Aзаголовок', body: 'R_texttexttext' },
    { id: 2, title: '1заголовок2', body: 'T_texttexttext2' },
    { id: 3, title: 'Tзаголовок2', body: 'S_texttexttext3' },

  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')



  //использовал useMemo для сортировки массива постов
  const sortedPosts = useMemo( () => {
    console.log ('отработала сортировка')
    if (selectedSort) {
      return [...posts].sort( (a,b) => a[selectedSort] - b[selectedSort] ? 1 : -1)
    }
    return posts

  }, [selectedSort, posts])

  //отсортированные и отфильтрованный поиском массив
  const sortedAndSearchPosts = useMemo ( () => {

    return sortedPosts.filter( post => post.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))

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

      <PostForm create={createPost}/>
      
      <div style={{margin: '15px'}}></div>

      <div className='panelPostNav'>
        <div>
          <MySelect
            value = {selectedSort}
            onChange={sortedAndSearchPosts}
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

import { useEffect, useState } from 'react';
import { usePosts } from './hooks/usePosts';

import './styles.css';

import PostService from './API/PostService';
import GenTitle from './components/GenTitle';
import PostForm from './components/PostForm';
import Line from './components/Line';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyBtn from './components/UI/MyBtn';
import MyLoader from './components/UI/loader/MyLoader';

function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [activeModal, setActiveModal] = useState(false)
  const sortedAndSearchPost = usePosts(posts, filter.sort, filter.query)
  const [isLoading, setIsLoading] = useState(false)

  const arrOptions = [
    { value: 'title', name: 'Названию' },
    { value: 'body', name: 'Описанию' }
  ]

  const funCreatePost = (newPost) => {
    setPosts([newPost, ...posts])
    setActiveModal(false)
  }

  const funDeletePost = (deletedPost) => {
    setPosts(posts.filter((elPost) => elPost.id !== deletedPost.id))
  }

  async function fetchPost() {
    setIsLoading(true)

    setTimeout(async () => {
      const responsePosts = await PostService.getAll();
      setPosts(responsePosts)

      setIsLoading(false)

    }, 5000)

  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div className="App">
      <GenTitle genTitleText="Список постов" />
      <MyBtn
        addClassName='box-calling-form-btn'
        onClick={() => setActiveModal(true)}
      >
        СОЗДАТЬ ПОСТ
      </MyBtn>
      <Line />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
        argSelectArrOptions={arrOptions}
      />
      <Line />
      {
        isLoading
          ? <MyLoader />
          : <PostList arrPosts={sortedAndSearchPost} argDeletePost={funDeletePost} />
      }
      <MyModal activeModal={activeModal} setActiveModal={setActiveModal}>
        <PostForm argCreatePost={funCreatePost} />
      </MyModal>
    </div>
  );
}

export default App;

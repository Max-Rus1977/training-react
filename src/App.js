import { useEffect, useState } from 'react';
import { useFetching } from './hooks/useFetching';
import { usePosts } from './hooks/usePosts';

import { getPagesCount } from './utils/pages';

import './styles.css';

import PostService from './API/PostService';
import GenTitle from './components/GenTitle';
import PostForm from './components/PostForm';
import Line from './components/Line';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter';
import MyModal from './UI/modal/MyModal';
import MyBtn from './UI/MyBtn';
import MyLoader from './UI/loader/MyLoader';
import ErrorMessage from './UI/error/ErrorMessage';
import Pagination from './components/pagination/Pagination';

function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [activeModal, setActiveModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const sortedAndSearchPost = usePosts(posts, filter.sort, filter.query)

  const [fetchPost, postLoading, queryError] = useFetching(async (limit, page) => {

    const responsePosts = await PostService.getAll(limit, page);
    setPosts(responsePosts.data)

    const totalCount = responsePosts.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount, limit))
  })

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

  useEffect(() => {
    fetchPost(limit, page)
  }, [])

  const changePost = (page) => {
    setPage(page)
    fetchPost(limit, page)
  }

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
      {queryError && <ErrorMessage queryError={queryError} />}
      {
        postLoading
          ? <MyLoader />
          : <PostList arrPosts={sortedAndSearchPost} argDeletePost={funDeletePost} />
      }
      <MyModal activeModal={activeModal} setActiveModal={setActiveModal}>
        <PostForm argCreatePost={funCreatePost} />
      </MyModal>
      <Pagination totalPages={totalPages} page={page} changePost={changePost} />
    </div>
  );
}

export default App;

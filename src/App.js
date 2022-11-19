import { useState } from 'react';

import GenTitle from './components/GenTitle';
import PostForm from './components/PostForm';
import Line from './components/Line';
import MySelect from './components/UI/MySelect';
import PostList from './components/PostList';
import TitlePostsNone from './components/TitlePostsNone';

import './styles.css';

function App() {

  const [posts, setPosts] = useState([
    {
      "userId": 1,
      "id": 1,
      "title": "I am an egocentric choice, except for repentance",
      "body": "please stop shouting and deny the consequences of what's coming and how to avoid it i am a royal arsenal leader"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "it's hard to believe that she doesn't have to drink much pain if she doesn't have to be bored ou don't have to worry about anything that is not possible without you"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "she was almost upset when she sat there",
      "body": "i am so happy but you can relax i've been charged with a couple of times so i've been charged with a couple of times hate to see him work and heal him"
    },
  ])

  const funCreatePost = (newPost) => {
    setPosts([newPost, ...posts])
  }

  const funDeletePost = (deletedPost) => {
    setPosts(posts.filter((elPost) => elPost.id !== deletedPost.id))
  }

  const [selectedSort, setSelectedSort] = useState('')

  const arrOptions = [
    { value: 'title', name: 'Названию' },
    { value: 'body', name: 'Описанию' }
  ]

  const funSortedPost = (sort) => {
    setSelectedSort(sort)
    console.log(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <GenTitle genTitleText="Список постов" />
      <PostForm argCreatePost={funCreatePost} />
      <Line />
      <MySelect
        defaultValue='Сортировка по:'
        argArrOptions={arrOptions}
        value={selectedSort}
        argSortedPost={funSortedPost} />
      <Line />
      {
        posts.length !== 0
          ? <PostList arrPosts={posts} argDeletePost={funDeletePost} />
          : <TitlePostsNone />
      }
    </div>
  );
}

export default App;

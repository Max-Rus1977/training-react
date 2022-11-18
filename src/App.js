import { useState } from 'react';

import GenTitle from './components/GenTitle';
import Line from './components/Line';
import MyBtn from './components/UI/MyBtn';
import MyInput from './components/UI/MyInput';
import MyTextarea from './components/UI/MyTextarea';
import PostItem from './PostItem';

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


  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const getTextInput = (event) => {
    setTitle(event.target.value)
  }

  const getTextTextarea = (event) => {
    setBody(event.target.value)
  }

  const addNewPost = (event) => {
    event.preventDefault()
    if (title && body) {
      const newPost = {
        id: Date.now(),
        title,
        body,
      }
      setPosts([newPost, ...posts])
      console.log(newPost)
      setTitle('')
      setBody('')
    }
    else {
      alert('Поля не заполнены!')
    }
  }

  return (
    <div className="App">
      <GenTitle genTitleText="Список постов" />
      <form>
        <MyInput onChange={getTextInput} value={title} labelName='Текст заголовка' />
        <MyTextarea onChange={getTextTextarea} value={body} labelName='Текст поста' />
        <MyBtn onClick={addNewPost}>ADD POST</MyBtn>
      </form>
      <Line />
      {posts.map((post, index) => <PostItem
        key={post.id}
        numberPost={index + 1}
        argObjPost={post} />
      )}
    </div>
  );
}

export default App;
// git remote add origin https://github.com/Max-Rus1977/training-react.git
import React, { useState } from 'react';

import MyBtn from './UI/MyBtn';
import MyInput from './UI/MyInput';
import MyTextarea from './UI/MyTextarea';

const PostForm = ({ argCreatePost }) => {
  const [dataPost, setDataPost] = useState({ title: '', body: '' })

  const getTextInput = (event) => {
    setDataPost({ ...dataPost, title: event.target.value })
  }

  const getTextTextarea = (event) => {
    setDataPost({ ...dataPost, body: event.target.value })
  }

  const addNewPost = (event) => {
    event.preventDefault()
    if (dataPost.title && dataPost.body) {
      const newPost = { id: Date.now(), ...dataPost }
      argCreatePost(newPost)
      setDataPost({ title: '', body: '' })
    }
    else {
      alert('Поля не заполнены!')
    }
  }

  return (
    <form>
      <MyInput onChange={getTextInput} value={dataPost.title} labelName='Текст заголовка' />
      <MyTextarea onChange={getTextTextarea} value={dataPost.body} labelName='Текст поста' />
      <MyBtn addClassName='box-btn__add-post' onClick={addNewPost}>ADD POST</MyBtn>
    </form >
  )
}

export default PostForm
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Line from '../components/Line'

const OnePost = () => {
  const [onePost, setOnePost] = useState(0)
  const [onePostComments, setOnePostComments] = useState([])
  const postId = +document.location.pathname.substring(10)

  const getThisPost = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    setOnePost(response.data);
  }
  useEffect(() => {
    getThisPost()
  })

  const getThisPostComments = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    setOnePostComments(response.data);
  }
  useEffect(() => {
    getThisPostComments()
  })

  return (
    <div>
      <h2 className='one-post-gen-title'>Post id {onePost.id}</h2>
      <div className='box-one-post'>
        <h3 className='title-one-post'>{onePost.title}</h3>
        <p>{onePost.body}</p>
      </div>
      <Line />
      <h4 className='title-one-post-comments'>Your Comments</h4>
      <div className="box-one-post-comments">
        {
          onePostComments.map((comment) =>
            <div
              key={comment.id}
              className='box-comments'
            >
              <p>{comment.id}. {comment.email}</p>
              <h5>{comment.name}</h5>
              <p>{comment.body}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default OnePost
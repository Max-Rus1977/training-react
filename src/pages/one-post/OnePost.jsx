// import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../../API/PostService'
import { useFetching } from '../../hooks/useFetching'

import Line from '../../components/Line'
import MyLoader from '../../UI/loader/MyLoader'
import OnePostComments from './OnePostComments'
import OnePostData from './OnePostData'
import ErrorMessage from '../../UI/error/ErrorMessage'

const OnePost = () => {
  const paramsId = useParams()

  const [thisPost, setThisPost] = useState(0)
  const [thisPostComments, setThisPostComments] = useState([])

  const [fetchPostById, loadingPost, errorPost] = useFetching(async (id) => {
    const response = await PostService.getThisPost(id)
    setThisPost(response.data);
  })

  const [fetchCommentsById, loadingComments, errorComments] = useFetching(async (id) => {
    const response = await PostService.getThisPostComments(id)
    setThisPostComments(response.data);
  })

  useEffect(() => {
    fetchPostById(paramsId.id)
    fetchCommentsById(paramsId.id)
  }, [])

  return (
    <div className='box-this-post'>
      <h2 className='one-post-gen-title'>Post id {thisPost.id}</h2>
      {errorPost && <ErrorMessage errorPost={errorPost} />}
      {
        loadingPost
          ? <MyLoader />
          : <OnePostData thisPost={thisPost} />
      }
      <Line />
      <h4 className='title-one-post-comments'>Your Comments</h4>
      {errorComments && <ErrorMessage errorComments={errorComments} />}
      {
        loadingComments
          ? <MyLoader />
          : <OnePostComments thisPostComments={thisPostComments} />
      }
    </div >
  )
}

export default OnePost
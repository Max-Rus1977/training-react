import React from 'react'

const OnePostData = ({ thisPost }) => {
  return (
    <div className='box-one-post'>
      <h3 className='title-one-post'>{thisPost.title}</h3>
      <p>{thisPost.body}</p>
    </div>
  )
}

export default OnePostData
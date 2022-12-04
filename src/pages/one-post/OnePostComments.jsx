import React from 'react'

const OnePostComments = ({ thisPostComments }) => {
  return (
    <div className="box-one-post-comments">
      {
        thisPostComments.map((comment) =>
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
  )
}

export default OnePostComments
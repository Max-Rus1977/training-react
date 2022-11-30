import React from 'react'

const MyTextarea = ({ labelName, ...props }) => {
  return (
    <div className='box-textarea'>
      <label htmlFor="body-label">{labelName}</label>
      <textarea {...props} id="body-label"></textarea>
    </div>
  )
}

export default MyTextarea
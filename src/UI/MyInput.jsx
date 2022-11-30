import React from 'react'

const MyInput = ({ labelName, ...props }) => {
  return (
    <div className='box-input'>
      <label htmlFor="title-label">{labelName}</label>
      <input {...props} id="title-label" type="text" />
    </div>
  )
}

export default MyInput
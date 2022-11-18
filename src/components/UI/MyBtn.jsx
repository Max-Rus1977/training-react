import React from 'react'

const MyBtn = ({ children, ...props }) => {
  return (
    <div className='box-btn__add-post'>
      <button {...props} className='btn btn__add-post' >{children}</button>
    </div>
  )
}

export default MyBtn
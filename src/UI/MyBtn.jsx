import React from 'react'

const MyBtn = ({ addClassName, children, ...props }) => {

  const arrClassBtn = []
  if (addClassName) {
    arrClassBtn.push(addClassName)
  }

  return (
    <div className={arrClassBtn.join(' ')}>
      <button {...props} className='btn__add-post' >{children}</button>
    </div>
  )
}

export default MyBtn
import React from 'react'
import MyBtn from '../MyBtn'
import cl from './MyModal.module.css'

const MyModal = ({ activeModal, setActiveModal, children }) => {
  const rootClassesModal = [cl.boxModal]

  const closeModal = () => {
    setActiveModal(false)
  }

  if (activeModal) {
    rootClassesModal.push(cl.active)
  }

  return (
    <div className={rootClassesModal.join(' ')} onClick={closeModal}>
      <div className={cl.modal} onClick={(event) => event.stopPropagation()}>
        <MyBtn onClick={closeModal} addClassName='closeModal'>❌</MyBtn>
        {children}
      </div>
    </div>
  )
}

export default MyModal
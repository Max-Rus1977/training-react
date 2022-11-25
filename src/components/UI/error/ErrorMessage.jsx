import React from 'react'
import cl from './ErrorMessage.module.css'

const ErrorMessage = ({ queryError }) => {
  return (
    <div className={cl.box}>
      <h2 className={cl.title}>Произошла ошибка!</h2>
      <div className={cl.boxText}>
        <p className={cl.text}>Текст ошибки:</p>
        <p className={cl.text}>{queryError}</p>
      </div>
    </div>
  )
}

export default ErrorMessage
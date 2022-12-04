import React from 'react'
import cl from './ErrorMessage.module.css'

const ErrorMessage = ({ queryError, errorPost, errorComments }) => {

  let textError = ''
  if (queryError) {
    textError = queryError
  }
  else if (errorPost) {
    textError = errorPost
  }
  else if (errorComments) {
    textError = errorComments
  }

  return (
    <div className={cl.box}>
      <h2 className={cl.title}>Произошла ошибка!</h2>
      <div className={cl.boxText}>
        <p className={cl.text}>Текст ошибки:</p>
        <p className={cl.text}>{textError}</p>
      </div>
    </div>
  )
}

export default ErrorMessage
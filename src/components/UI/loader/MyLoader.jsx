import React from 'react'
import cl from './MyLoader.module.css'

const MyLoader = () => {
  return (
    <div className={cl.boxLoader}>
      <h2 className={cl.loaderTitle}>Идёт загрузка ...</h2>
      <div className={cl.loaderRound}></div>
    </div>
  )
}

export default MyLoader
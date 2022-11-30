import React from 'react'
import { getPagesArray } from '../../utils/pages'
import cl from './Pagination.module.css'

const Pagination = ({ totalPages, page, changePost }) => {

  const pageArray = getPagesArray(totalPages)
  const classActive = [cl.active, cl.paginationBtn].join(' ')

  return (
    <div className={cl.boxPagination}>
      {pageArray.map((num) =>
        <button
          key={num}
          className={num === page ? classActive : cl.paginationBtn}
          onClick={() => changePost(num)}
        >
          {num}
        </button>)}
    </div>
  )
}

export default Pagination
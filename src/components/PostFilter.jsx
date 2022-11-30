import React from 'react'
import MySelect from '../UI/MySelect'

const PostFilter = ({ filter, setFilter, argSelectArrOptions }) => {

  const funSortedPost = (sort) => {
    setFilter({ ...filter, sort: sort })
  }

  const funSearch = (event) => {
    setFilter({ ...filter, query: event.target.value })
  }

  return (
    <div>
      <MySelect
        defaultValue='Сортировка по:'
        argSelectArrOptions={argSelectArrOptions}
        filter={filter}
        onChange={funSortedPost}
      />
      <input
        className='input-search'
        placeholder='ПОИСК'
        onChange={funSearch}
        filter={filter.query}
      />
    </div>
  )
}

export default PostFilter
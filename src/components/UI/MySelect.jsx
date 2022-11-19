import React from 'react'

const MySelect = ({ argArrOptions, argSortedPost, defaultValue, value }) => {
  const changeThisSelect = (event) => {
    argSortedPost(event.target.value)
  }

  return (
    <select
      className='select'
      onChange={changeThisSelect}
      value={value}
    >
      <option disabled value=''>{defaultValue}</option>
      {argArrOptions.map((option) =>
        <option
          key={option.value}
          value={option.value}
        >
          {option.name}
        </option>)}
    </select>
  )
}

export default MySelect
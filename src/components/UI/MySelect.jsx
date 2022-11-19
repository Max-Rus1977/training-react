import React from 'react'

const MySelect = () => {
  const objOptions = ['Названию', 'Описанию']

  return (
    <select className='select'>
      <option>Сортировка по:</option>
      {objOptions.map((option) => <option>{option}</option>)}
    </select>
  )
}

export default MySelect
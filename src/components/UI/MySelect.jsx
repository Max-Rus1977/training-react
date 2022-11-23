import React from 'react'

const MySelect = ({ argSelectArrOptions, defaultValue, filter, onChange }) => {

  return (
    <select
      className='select'
      onChange={(event) => onChange(event.target.value)}
      value={filter.sort}
    >
      <option disabled value=''>{defaultValue}</option>
      {argSelectArrOptions.map((option) =>
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
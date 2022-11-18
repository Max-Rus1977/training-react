import React, { useState } from 'react'

const ManagedInput = () => {
  const [inputValue, setInputValue] = useState('Текст в input');

  function funChangeValue(event) {
    setInputValue(event.target.value)
  }

  return (
    <div>
      <div>
        <p>{inputValue}</p>
        <input type="text" onChange={funChangeValue} value={inputValue} />
      </div>
    </div>
  )
}

export default ManagedInput
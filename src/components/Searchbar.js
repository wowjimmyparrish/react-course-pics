import React, { useState } from 'react'

function Searchbar({onSubmit}) {
  const [term, setTerm] = useState('')


  const handleFormSubmit = (event) => {
    event.preventDefault()
    onSubmit(term)
  }

  const handleChange = (event) => {
    setTerm(event.target.value)
  }
  
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
      <input onChange={handleChange} value={term}/>  
      </form>
    </div>
  )
}

export default Searchbar
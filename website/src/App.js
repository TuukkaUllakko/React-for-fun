import React, { useState } from 'react'

const App = () => {
  const [state, setState] = useState('Change me!')
  const [newState, setNewState] = useState('')

  const handleNewStateChange = (event) => {
    event.preventDefault()
    setNewState(event.target.value)
  }

  const handleStateChange = (event) => {
    event.preventDefault()
    setState(newState)
  }

  return (
    <div>
      {state}
      <form onSubmit={handleStateChange}>
        <input value={newState} onChange={handleNewStateChange}/>
        <button type="submit">Change</button>
      </form>
    </div>
  )
}

export default App

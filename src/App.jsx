import React from 'react'
import RouterCompnents from './Routes/RouterCompnents'
import { Link, useLocation } from 'react-router-dom'

const App = () => {
  const { search, pathname } = useLocation();
  return (
    <div>
      {(pathname != "/" || search.length > 0) && (
        <Link to="/" className='text-red-300 absolute left-72 ml-2 top-5 px-4 py-2 border border-red-300 rounded'>Home</Link>
      )}
      <RouterCompnents />
    </div>
  )
}

export default App
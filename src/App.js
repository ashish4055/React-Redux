import React from 'react'
import { useRoutes } from 'react-router-dom'

import { appRoutes } from './routes/MainRoutes'
const App = () => {
  const myRoutes = useRoutes(appRoutes);
  return (
    myRoutes
  )
}

export default App
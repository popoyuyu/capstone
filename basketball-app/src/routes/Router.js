import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './routes'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route {...routes.main} />
        <Route {...routes.profile} />
        <Route {...routes.search} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router }

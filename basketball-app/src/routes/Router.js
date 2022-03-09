import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './routes'

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route {...routes.main} />
      <Route {...routes.profile} />
      <Route {...routes.search} />
    </Routes>
  </BrowserRouter>
)

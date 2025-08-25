import React from 'react'
import './index.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import useAuthUser from './hooks/useAuthUser'
import Login from './components/Login'

function App() {
  const { isLoading, user, isError, error } = useAuthUser()

  if (isLoading) return <h1>Loading...</h1>

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={user ? <h1>Home</h1> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  )
}

export default App

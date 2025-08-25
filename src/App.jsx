import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import AppRoutes from './router.jsx'

export default function App(){
  return (
    <div className="app">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  )
}

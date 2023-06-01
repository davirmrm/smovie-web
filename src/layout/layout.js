import React, { useEffect, useState } from 'react'
import Header from './header'
import Footer from './footer'
import './layout.scss'
import './layout-color.css'
import { Alert } from '../components'

export default ({ children }) => {  
  const [heigthHeader, setHeigthHeader] = useState(0)
  useEffect(() => {
    setHeigthHeader(document.getElementById('box-header').offsetHeight)
  }, [])
  const heightApp = { height: `calc(100vh - ${heigthHeader}px)` }

  return (
    <>
      <Alert />
      <Header />
      <div id='box-app' style={heightApp}>
        <section id='box-container' style={heightApp}>
          {children}
          <Footer />
        </section>
      </div>
    </>
  )
}

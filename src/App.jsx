import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './assets/components/Nav'
import Header from './assets/components/Header'
import Main from './assets/components/Main'
import Footer from './assets/components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App

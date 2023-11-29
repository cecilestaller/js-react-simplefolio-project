import { useState } from "react";
import './App.css'
import Nav from './assets/components/Nav'
import Header from './assets/components/Header'
import Main from './assets/components/Main'
import Footer from './assets/components/Footer'

function App() {
  const [darkmode, setDarkmode] = useState(false);
  console.log("app page:", darkmode);
  return (
    <div className={`app_wrap ${darkmode ? "bright" : "dark" }`}>
      <Nav transferDarkState={setDarkmode} getter={darkmode}/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer.jsx'
import { FaBolt } from "react-icons/fa6"
import Task from './components/t'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className='seperator'></div>
      <main className="main">
        <section className="todo">
          <Task name={"task 1"}/>
          <Task name={"task 2"}/>
          <Task name={"task 3"}/>
        </section>
      </main>
      <FaBolt color="green"></FaBolt>
      <Footer/>
    </>
  )
}

export default App

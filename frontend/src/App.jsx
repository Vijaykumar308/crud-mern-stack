import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Listview from './components/Listview'

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <div className='bg-yellow-800 h-16'>
      <div className='' onClick={toggleClick}> Switch </div>
    </div>

    {
      isOpen ? <Listview /> : <Form />
    } 
      
      
    </>
  )
}

export default App

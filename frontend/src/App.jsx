import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Listview from './components/Listview'
import EditForm from "./components/EditForm";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AreYouSureAlert from './components/AreYouSureAlert';
function App() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Listview />}/> 
          <Route path='/contact-us' element={<Form />}/> 
          <Route path='/edit/:id' element={<EditForm />}/> 
          <Route path='/popup' element={<AreYouSureAlert />}/> 
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App

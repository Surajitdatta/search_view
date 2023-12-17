import React from 'react'
import Cloths from './component/Cloths';
import "./App.css"
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import View from './component/View';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cloths/>}/>
          <Route path="/View/:id" element={<View/>} />
        </Routes>
      </BrowserRouter>
      
      

      
    </div>
  )
}

export default App;
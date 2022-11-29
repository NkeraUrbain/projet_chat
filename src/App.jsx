import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { useState } from 'react'
import './App.css'
import Envoiemessage from './Envoiemessage'
import NewUser from "./components/NewUser";
import NewUser2 from "./components/NewUser2";
import Login from "./components/Login";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
    <BrowserRouter>
        <Routes>
          
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/newuser" element={<NewUser/>}></Route>
          <Route path="/newuser2" element={<NewUser2/>}></Route>
          <Route path="/envoiMessage" element={<Envoiemessage/>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  )

}

export default App

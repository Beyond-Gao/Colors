import { HashRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Home from '@/pages/Home'
import { ColorProvider } from './contexts/ColorContext';


function App() {


  return (

    <ColorProvider>
      <Router>
        <Routes>
          <Route path='/' element={

            <Home />

          } />

        </Routes>
      </Router>
    </ColorProvider>

  )
}

export default App

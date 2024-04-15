import { HashRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Home from '@/pages/Home'
import { ColorProvider } from './contexts/ColorContext';
// import { Suspense } from "react";
// import Loading from "./components/Loading";


function App() {


  return (

    <ColorProvider>
      <Router>
        <Routes>
          <Route path='/' element={
            // <Suspense fallback={<Loading />}>
            <Home />
            // </Suspense>
          } />

        </Routes>
      </Router>
    </ColorProvider>

  )
}

export default App

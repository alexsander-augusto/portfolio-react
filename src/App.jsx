import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Projects from './components/Projects'

import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"

import "./styles/components/app.sass"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (
    <Router>      
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <div id="portfolio">
              <div className="portfolio-content">
                <Sidebar />
                <MainContent />
              </div>
              <Footer />
            </div>
          }>
          </Route>
          <Route exact path="/projects" element={<Projects />}>
          </Route>
        </Routes>        
    </Router>
  )
}

export default App
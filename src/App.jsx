import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"

import "./styles/components/app.sass"

import background from "./img/background.png"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <div id="portfolio">
      <Header />
      <div className="portfolio-content">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  )
}

export default App
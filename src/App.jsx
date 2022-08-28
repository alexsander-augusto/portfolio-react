import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"

import "./styles/components/app.sass"

import background from "./img/background.png"

function App() {

  return (
    <div id="portfolio" 
      // style={{
      //   backgroundImage: `url(${background})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center"
      // }}
    >
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App

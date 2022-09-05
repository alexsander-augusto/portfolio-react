import AboutContainer from "./AboutContainer"
import TechnologiesContainer from "./TechnologiesContainer"
import ContactContainer from "./ContactContainer"

import "../styles/components/maincontent.sass"

const MainContent = () => {
  return (
    <main id="main-content">
      {/* <AboutContainer /> */}
      <TechnologiesContainer />
      <ContactContainer />
    </main>
  )
}

export default MainContent
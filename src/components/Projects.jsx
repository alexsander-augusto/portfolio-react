import Footer from "./Footer"
import Github from "./Github/Github"

import '../styles/components/projects.sass'

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <div className="projects-content">
          <Github />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projects
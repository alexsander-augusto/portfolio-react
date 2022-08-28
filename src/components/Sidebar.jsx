import SocialNetworks from "./SocialNetworks"

import "../styles/components/sidebar.sass"

import Rocket from "../img/rocket.png"
import Stars from "../img/stars.png"


const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Stars} alt="Estrelas" />
    <img src={Rocket} alt="Foguete" />    
    <p className="title">Hi, I'm</p>
    <br></br>
    <p className="title-name">Alexsander</p>
    <p className="subtitle">Front-end Developer</p>
    <SocialNetworks />    
    {/* <a href="" className="btn">
      Contact me!
    </a> */}
  </aside>
}

export default Sidebar
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { 
        name: "linkedin", 
        icon: <FaLinkedin />,
        url: 'https://www.linkedin.com/in/alexsander-augusto/'
    },
    { 
        name: "github", 
        icon: <FaGithub />,
        url: 'https://github.com/alexsander-augusto'
    },
    { 
        name: "instagram", 
        icon: <FaInstagram />,
        url: 'https://www.instagram.com/lxmorais/'
    }
]

const SocialNetworks = () => {
  return (
    <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.url} className='social-btn' id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks
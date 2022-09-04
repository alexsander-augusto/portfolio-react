import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiSass,
  DiPhotoshop,
  DiIllustrator
} from 'react-icons/di'

import { 
  SiTypescript,
  SiStyledcomponents,
  SiVite
} from 'react-icons/si'

import {
  FaShopify,
  FaWordpress
} from 'react-icons/fa'

import {
  TbBrandNextjs
} from 'react-icons/tb'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: "html", icon: <DiHtml5 />, url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5" },
  { id: "css", icon: <DiCss3 />, url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS" },
  { id: "js", icon: <DiJsBadge />, url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },  
  { id: "typescript", icon: <SiTypescript />, url: "https://www.typescriptlang.org/docs/" },
  { id: "sass", icon: <DiSass />, url: "https://sass-lang.com/documentation/" },
  { id: "styled-components", icon: <SiStyledcomponents />, url: "https://styled-components.com/docs" },  
  { id: "react", icon: <DiReact />, url: "https://pt-br.reactjs.org/docs/getting-started.html" },
  { id: "next", icon: <TbBrandNextjs />, url: "https://nextjs.org/docs" },
  { id: "vite", icon: <SiVite />, url: "https://vitejs.dev/" },  
  { id: "photoshop", icon: <DiPhotoshop />, url: "https://helpx.adobe.com/support/photoshop.html" },
  { id: "illustrator", icon: <DiIllustrator />, url: "https://helpx.adobe.com/br/illustrator/user-guide.html" },  
  { id: "shopify", icon: <FaShopify />, url: "https://www.shopify.com.br/" },
  { id: "wordpress", icon: <FaWordpress />, url: "https://developer.wordpress.com/docs/" },
]

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Technology</h2>
      <div className="technologies">
        {technologies.map((tech) => (
          <a href={tech.url} className="technologies-icons" id={tech.id} key={tech.id}>
            {tech.icon}
          </a>
        ))}
      </div>
      {/* <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  )
}

export default TechnologiesContainer
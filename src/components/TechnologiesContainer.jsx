import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiSass
} from 'react-icons/di'

import { SiTypescript } from 'react-icons/si'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: "html", icon: <DiHtml5 />, url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5" },
  { id: "css", icon: <DiCss3 />, url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS" },
  { id: "js", icon: <DiJsBadge />, url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },  
  { id: "typescript", icon: <SiTypescript />, url: "https://www.typescriptlang.org/docs/" },
  { id: "sass", icon: <DiSass />, url: "https://sass-lang.com/documentation/" },
  { id: "react", icon: <DiReact />, url: "https://pt-br.reactjs.org/docs/getting-started.html" }
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
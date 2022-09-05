import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { GithubContainer, GithubContents, GithubContent, Title, Stars } from './styles'

import { AiOutlineStar } from 'react-icons/ai'

const projectsName = [
  'portfolio-react',
  'foods_e-commerce',
  'pokedex',
  'our.weather',
  'Ignite-reactJS-dt.money'
]

const Github = () => {

  const [projects, setProjects] = useState([])
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    getApiGithubRepos()
  }, [])

  function getApiGithubRepos() {
    axios.get('https://api.github.com/users/alexsander-augusto/repos', {

    })
      .then(function (response) {
        setProjects(response.data)
      })
      .catch(function (error) {
        setErrorMsg("Github temporariamente indisponível!")
      });
  }

  return (
    <>
      <GithubContainer>
        <GithubContents>
          {
            projects.map((project) => 
              projectsName.includes(project.name) && (
                <GithubContent key={project.id}>
                  <Title>
                    <p>{project.created_at}</p>
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">{project.name}</a>
                    <p>tech</p>
                  </Title>
                  <Stars>
                    <AiOutlineStar />{project.stargazers_count}
                  </Stars>
                </GithubContent>
              )
            )
          }
        </GithubContents>
        <p>{errorMsg}</p>
      </GithubContainer>
    </>
  )
}

export default Github
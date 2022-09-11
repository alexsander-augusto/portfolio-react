import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { format } from 'date-fns';

import { GithubContainer, GithubContents, GithubContent, Title, Stars, SeeMore } from './styles'

import { AiOutlineStar } from 'react-icons/ai'

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
            projects.map((project) => {
              const month = format(new Date(project.created_at), 'LLL');
              const year = format(new Date(project.created_at), 'Y');     
              
              for(let i = 0; i < 9; i++) {
                if(project.topics[i] == "portfolio") {
                  return (
                    <GithubContent key={project.id}>
                      <Title>
                        <time className="date">
                          <p>{`${month}, ${year}`}</p>
                        </time>
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer">{project.name}</a>
                        <p>{project.description}</p>
                      </Title>
                      <Stars>
                        <AiOutlineStar />{project.stargazers_count}
                      </Stars>
                    </GithubContent>
                  )
                }
              }                          
            })
          }
          <SeeMore>
            <a
              href="https://github.com/alexsander-augusto?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              see more...
            </a>
          </SeeMore>  
        </GithubContents>
        <p>{errorMsg}</p>
      </GithubContainer>
    </>
  )
}

export default Github
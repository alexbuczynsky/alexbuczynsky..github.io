import React, { useEffect, useState } from 'react'
import { Project } from './Project'
import { Grid, Divider, LinearProgress } from '@material-ui/core'
import { GithubProjectListItem, GithubProjectListItemProps } from './GithubProjectListItem'
import { fetchGithubProjects } from '../../services/data-api'

type State = {
  projects: GithubProjectListItemProps[];
  isLoading: boolean;
}

export const GithubProjectList: React.FC = () => {
  const [state, setState] = useState<State>({
    isLoading: true,
    projects: [],
  });

  useEffect(() => {
    fetchGithubProjects()
      .then(data => {
        // Wait a little longer to show the data to show the loading effect
        setTimeout(() => {
          setState({
            projects: data,
            isLoading: false,
          })
        }, 500)

      })
      .catch(err => {
        setState({
          ...state,
          isLoading: false,
        })
      })
  }, [])

  return (
    <Project title='Open Source Projects'>

      <LinearProgress hidden={state.isLoading === false} color='secondary' />

      <Grid container spacing={2} style={{ minHeight: '250px' }}>
        {state.projects.map((project, ii) => (
          <React.Fragment>
            <GithubProjectListItem
              key={project.projectLink}
              {...project}
              growTimeout={ii * 500 + 250}
            />
            <Divider />

          </React.Fragment>
        ))}
      </Grid>


    </Project>
  )
}
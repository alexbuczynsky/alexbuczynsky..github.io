import React from 'react'
import { Project } from './Project'

import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import LinearProgress from '@material-ui/core/LinearProgress'

import { GithubProjectListItem } from './GithubProjectListItem'
import { useResume } from '../../services/data-api'

export const GithubProjectList: React.FC = () => {
  const [resume, fetchState] = useResume()

  return (
    <Project title='Open Source Projects'>

      <LinearProgress hidden={fetchState.isLoading === false} color='secondary' />

      <Grid container spacing={2} style={{ minHeight: '250px' }}>
        {resume.projects.github.map((project, ii) => (
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
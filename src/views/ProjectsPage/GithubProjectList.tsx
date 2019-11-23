import React from 'react'
import { Project } from './Project'
import { Grid, Divider } from '@material-ui/core'
import { GithubProjectListItem, GithubProjectListItemProps } from './GithubProjectListItem'

const GithubProjects: GithubProjectListItemProps[] = [
  {
    projectName: 'jsmodbus',
    projectLink: 'https://github.com/Cloud-Automation/node-modbus',
    npmName: 'jsmodbus',
    role: 'Maintainer',
    description: 'A Typescript library for communicating via the modbus protocol.'
  },
  {
    projectName: 'Node Buffer Tools',
    projectLink: 'https://github.com/alexbuczynsky/node-buffer-tools',
    npmName: 'ts-buffer-tools',
    role: 'Owner',
    description: 'A Typescript library for manipulating buffer data.'
  },
  {
    projectName: 'Geri Monitor',
    projectLink: 'https://github.com/alexbuczynsky/GeriMonitor',
    description: "A project to help the nurses at my grandfather's nursing home know when he gets up at night to prevent him from injuring himself."
  },
  {
    projectName: 'MATLAB-GPS-Calculations',
    projectLink: 'https://github.com/alexbuczynsky/MATLAB-GPS-Calculations',
  }
]

export const GithubProjectList: React.FC = () => {
  return (
    <Project title='Open Source Projects'>

      <Grid container spacing={2}>
        {GithubProjects.map(project => (
          <React.Fragment>
            <GithubProjectListItem
              key={project.projectLink}
              {...project}
            />
            <Divider />

          </React.Fragment>
        ))}
      </Grid>


    </Project>
  )
}
import React from 'react'
import { Project } from './Project'
import { List, Divider } from '@material-ui/core'
import { GithubProjectListItem, GithubProjectListItemProps } from './GithubProjectListItem'

const GithubProjects: GithubProjectListItemProps[] = [
  {
    projectName: 'jsmodbus',
    projectLink: 'https://github.com/Cloud-Automation/node-modbus',
    npmName: 'jsmodbus',
  },
  {
    projectName: 'Node Buffer Tools',
    projectLink: 'https://github.com/alexbuczynsky/node-buffer-tools',
    npmName: 'ts-buffer-tools',
  },
  {
    projectName: 'Geri Monitor',
    projectLink: 'https://github.com/alexbuczynsky/GeriMonitor',
  },
  {
    projectName: 'MATLAB-GPS-Calculations',
    projectLink: 'https://github.com/alexbuczynsky/MATLAB-GPS-Calculations',
  }
]

export const GithubProjectList: React.FC = () => {
  return (
    <Project title='Open Source Projects'>

      <List>
        {GithubProjects.map(project => (
          <React.Fragment>
            <GithubProjectListItem
              key={project.projectLink}
              projectLink={project.projectLink}
              projectName={project.projectName}
              npmName={project.npmName}
            />
            <Divider />

          </React.Fragment>
        ))}
      </List>


    </Project>
  )
}
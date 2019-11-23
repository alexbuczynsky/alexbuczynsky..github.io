import React from 'react'
import { ListItem, ListItemIcon, ListItemText, Button } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';

export type GithubProjectListItemProps = {
  projectName: string;
  projectLink: string;
  npmName?: string;
}

export const GithubProjectListItem: React.FC<GithubProjectListItemProps> = (props) => {

  const {
    projectName,
    projectLink,
    npmName
  } = props;

  return (
    <ListItem button>
      <ListItemIcon>
        <GitHubIcon />
      </ListItemIcon>
      <ListItemText primary={projectName} />
      {
        npmName &&
        <ListItemIcon>
          <img alt="npm" src={`https://img.shields.io/npm/dm/${npmName}`} ></img>
        </ListItemIcon>
      }

      <Button href={projectLink} color="primary" variant="outlined">
        Project
      </Button>
    </ListItem>
  )
}
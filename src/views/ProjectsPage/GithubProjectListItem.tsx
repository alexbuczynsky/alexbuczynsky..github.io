import React from 'react'
import { ListItem, ListItemIcon, ListItemText, Button, Typography, Card, CardHeader, Avatar, IconButton, CardContent, CardActions, Grid } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';

export type GithubProjectListItemProps = {
  projectName: string;
  projectLink: string;
  description?: React.ReactNode;
  npmName?: string;
  role?: 'Owner' | 'Maintainer'
  personal?: boolean;
}

export const GithubProjectListItem: React.FC<GithubProjectListItemProps> = (props) => {

  const {
    projectName,
    projectLink,
    npmName,
    role,
    description,
  } = props;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="project-icon">
              <GitHubIcon />
            </Avatar>
          }
          title={projectName}
          subheader={
            <React.Fragment>
              {role && <div>Role: {role}</div>}
              {
                npmName &&
                <img alt="npm" src={`https://img.shields.io/npm/dm/${npmName}`} ></img>
              }
            </React.Fragment>
          }
        />
        <CardContent>
          <Typography variant='subtitle1' component='div' >
            <u></u>
          </Typography>
          {
            role &&
            <Typography variant='subtitle2' component='div'>

            </Typography>
          }
          {
            description &&
            <Typography variant='subtitle2' component='div'>
              {description}
            </Typography>
          }
        </CardContent>
        <CardActions>
          <Button href={projectLink} color="secondary" size='medium' variant="outlined">
            View Code
        </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
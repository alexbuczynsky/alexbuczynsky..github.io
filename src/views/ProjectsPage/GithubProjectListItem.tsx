import React from 'react'
import { ListItem, ListItemIcon, ListItemText, Button, Typography, Card, CardHeader, Avatar, IconButton, CardContent, CardActions, Grid, Fade, Grow } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import './GithubProjectListItem.css'

export type GithubProjectListItemProps = {
  projectName: string;
  projectLink: string;
  description?: React.ReactNode;
  npmName?: string;
  role?: 'Owner' | 'Maintainer'
  personal?: boolean;
  growTimeout?: number;
}

export const GithubProjectListItem: React.FC<GithubProjectListItemProps> = (props) => {

  const {
    projectName,
    projectLink,
    npmName,
    role,
    description,
    growTimeout,
  } = props;

  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Grow in timeout={growTimeout}>
        <Card className='GithubProjectListItem'>
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
      </Grow>
    </Grid>
  )
}
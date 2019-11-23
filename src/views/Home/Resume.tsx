import React from 'react'
import { ProfilePicture } from '../../components/ProfilePictures'
import { makeStyles, Paper, Typography, Divider, List, ListItem, Card, CardContent } from '@material-ui/core'
import { PageHeaderTypography } from '../../components/MainPageHeader'
import { ExperienceList } from './components/ExperienceList'

const useStyles = makeStyles(theme => ({
  profilePicture: {
    height: '200px',
  }
}))

export const Resume: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <PageHeaderTypography title='Resume' />
      {/* <Paper elevation={1}>
        <ProfilePicture className={classes.profilePicture} />
      </Paper> */}

      <Card>
        <CardContent>
          <Typography variant='h4'>
            Experience
          </Typography>
          <ExperienceList />
        </CardContent>
      </Card>
    </div>
  )
}
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

import { PageHeaderTypography } from '../../components/MainPageHeader'
import { ExperienceList } from './components/ExperienceList'
import { DownloadResumeButton } from '../../components/DownloadResumeButton'

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

      <Card>
        <CardActions>
          <DownloadResumeButton />
        </CardActions>
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
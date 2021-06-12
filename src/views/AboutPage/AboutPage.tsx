import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'

import { ProjectHighlightCard } from './ProjectHighlightCard'
import { GithubProjectList } from '../ProjectsPage/GithubProjectList'

import {
  PersonalLinkedInIcon,
  PersonalGitHubIcon,
  PersonalInstagramIcon,
  PersonalTwitterIcon,
  PersonalEmailIcon
} from '../../components/SocialMediaIcons'

import { DownloadResumeButton } from '../../components/DownloadResumeButton'
import { ProfilePicture } from '../../components/ProfilePictures'
import { PageHeaderTypography } from '../../components/MainPageHeader'
import { SkillsList } from '../../components/Skills/SkillsList'

import { useResume } from '../../services/data-api'

import './AboutPage.css'

export const AboutPage: React.FC = () => {

  const [state, fetchState] = useResume()

  return (
    <div className='AboutPage'>
      <PageHeaderTypography title='About Me' />

      <Paper className='SummaryWrapper' elevation={1}>
        <Typography variant='h4' align='left'>
          Summary
        </Typography>
        <Grid className='SummaryGrid' container spacing={2} style={{ minHeight: '500px' }}>

          <Grid item xs={12} sm={12} md={4}>
            <p>
              <div className='profile-header'>
                <ProfilePicture className='profile-avatar' />
                <Typography variant='h6' align='center'>
                  Alexander Buczynsky
                </Typography>
                <Typography variant='subtitle1' align='center'>
                  Mechanical Engineer by degree, Software Engineer by trade, tinkerer by heart.
                </Typography>
              </div>
            </p>
          </Grid>


          <Grid className='ProfileWrapper' item xs={12} sm={12} md={8}>

            <Typography variant='body1' align='left'>
              <p>
                I am an experienced Software Engineer located in Dallas Texas with a demonstrated history of working in the industrial and building automation industry.
                Skilled in Control Systems, Docker, Industrial Communications, Web Development, Microservices, and cloud platforms such as AWS.
              </p>
              <p>
                With a Bachelor of Engineering degree focused in Mechanical Engineering from the
                University of Florida, I continue to attempt to fuse the worlds of the physical,
                electrical, and digital.
              </p>

            </Typography>

            <div className='RowContainer'>
              <PersonalLinkedInIcon className='SocialMediaIcon' color='inherit' size='medium' variant='outlined' />
              <PersonalGitHubIcon className='SocialMediaIcon' color='inherit' size='medium' variant='outlined' />
              <PersonalInstagramIcon className='SocialMediaIcon' color='inherit' size='medium' variant='outlined' />
              <PersonalTwitterIcon className='SocialMediaIcon' color='inherit' size='medium' variant='outlined' />
              <PersonalEmailIcon className='SocialMediaIcon' color='inherit' size='medium' variant='outlined' />
            </div>

            <div className='RowContainer'>
              <DownloadResumeButton />
            </div>


          </Grid>
        </Grid>
      </Paper>

      <Paper className='SummaryWrapper' elevation={1}>
        <Typography variant='h4' align='left' gutterBottom>
          Skills
        </Typography>
        <SkillsList hideProgressBar variant='simple' />
      </Paper>


      <Paper className='SummaryWrapper' elevation={1}>
        <Typography variant='h4' align='left' gutterBottom>
          Project Highlights
        </Typography>

        <GithubProjectList />
        <br />

        <LinearProgress hidden={fetchState.isLoading === false} color='secondary' />
        <Grid container spacing={4} >

          {state.projects.highlights.map(project => (
            <Grid item xs={12} sm={6} md={3}>
              <ProjectHighlightCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Paper>

    </div >
  )
}
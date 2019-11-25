import React, { useEffect, useState } from 'react'
import { PageHeaderTypography } from '../../components/MainPageHeader'
import { Paper, Typography, Grid, LinearProgress, } from '@material-ui/core'
import { ProfilePicture } from '../../components/ProfilePictures'
import { ProjectHighlightCard, ProjectHighlight } from './ProjectHighlightCard'
import './AboutPage.css'
import { PersonalLinkedInIcon, PersonalGitHubIcon, PersonalInstagramIcon, PersonalTwitterIcon, PersonalEmailIcon } from '../../components/SocialMediaIcons'
import { GithubProjectList } from '../ProjectsPage/GithubProjectList'
import { DownloadResumeButton } from '../../components/DownloadResumeButton'

async function fetchProjectHighlights(): Promise<ProjectHighlight[]> {
  const response = await fetch('/data/project_highlights.json');
  const data = await response.json();
  return data;
}

type State = {
  projects: ProjectHighlight[];
  isLoading: boolean;
}

export const AboutPage: React.FC = () => {

  const [state, setState] = useState<State>({
    isLoading: true,
    projects: [],
  });

  useEffect(() => {
    fetchProjectHighlights()
      .then(data => {
        // Wait a little longer to show the data to show the loading effect
        setTimeout(() => {
          setState({
            projects: data,
            isLoading: false,
          })
        }, 750)

      })
      .catch(err => {
        setState({
          ...state,
          isLoading: false,
        })
      })
  }, [])


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
                I am an experienced Software Engineer located in Dallas Texas with a demonstrated history of working in the electrical and electronic manufacturing industry.
                Skilled in Docker, Industrial Communications, Web Development, Microservices, and cloud platforms such as AWS.
              </p>
              <p>
                With a Bachelor of Engineering degree focused in Mechanical Engineering from the
                University of Florida, I continue to attempt to fuse the worlds of the physical,
                electrical, and digital.
              </p>

              <p>
                Since May 2017 I have been employed at Siemens creating industrial internet of things automation
                products that specialize in breaker controls and saftey equipment.
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
        <Typography variant='h4' align='left'>
          Project Highlights
        </Typography>
        <br />

        <GithubProjectList />
        <br />

        <LinearProgress hidden={state.isLoading === false} color='secondary' />
        <Grid container spacing={4} >

          {state.projects.map(project => (
            <Grid item xs={12} sm={6} md={3}>
              <ProjectHighlightCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Paper>

    </div >
  )
}
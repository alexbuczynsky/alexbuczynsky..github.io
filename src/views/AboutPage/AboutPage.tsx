import React from 'react'
import { PageHeaderTypography } from '../../components/MainPageHeader'
import { Container, Typography, Divider, Grid } from '@material-ui/core'
import { ProfilePicture } from '../../components/ProfilePictures'
import { ProjectHighlightCard } from './ProjectHighlightCard'
import './AboutPage.css'

export const AboutPage: React.FC = () => {
  return (
    <div className='AboutPage'>
      <PageHeaderTypography title='About Me' />
      <p>
        <div className='profile-header'>
          <ProfilePicture className='profile-avatar' />
          <Typography variant='subtitle1' align='center'>
            Alexander Buczynsky
          </Typography>
        </div>
      </p>
      <Divider />

      <Typography variant='body1' align='center'>
        <p>
          I am a Software Developer and Cybersecurity Apprentice in Dallas Texas working on and continually
          learning more about building secure modern industrial applications. I have been writing software
          since I started tinkering with automating my dorm room back in 2015.
        </p>

        <p>
          Since May 2017 I have been employed at Siemens creating industrial internet of things automation
          products that specialize in breaker controls and saftey equipment.
        </p>

      </Typography>



      <Container>
        <Typography variant='h5' align='left'>
          Project Highlights
        </Typography>
        <br />
        <Grid container spacing={4} >

          <Grid item xs={12} sm={6} md={3}>
            <ProjectHighlightCard
              linkURL='https://new.siemens.com/us/en/products/energy/low-voltage/smart-technology.html'
              projectDescription={`
                Historically integrated remote monitoring, configuration, and control have only been available with the inclusion
                of upstream PMCS, PCS, DCS, or SCADA systems. With the advent of Siemens Sma@rtGear™
                technology, remote monitoring, configuration, and control are standard features that
                are integral to the electrical apparatus product.
              `}
              projectName='Siemens Sm@rtGear Pro'
              imageURL='https://assets.new.siemens.com/siemens/assets/api/uuid:1a1739fc-38e1-41c2-b53d-41c6377c0220/width:640/quality:high/version:1567171245/smarttechnology.png'
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <ProjectHighlightCard
              linkURL='https://www.automotiveit.eu/54697-2/news/id-0054697'
              projectDescription={`
                Involved with the development of Audi's self-developed automated guided vehicle (AGV) for use in assembly line production at Audi, AG. The scope of the project is part of the vision of Industry 4.0.
              `}
              projectName='Audi "Paula" AGV'
              imageURL='/images/projects/Audi_Dialoge_Web_17_01_Startseite_PaulaonTour.jpg'
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <ProjectHighlightCard
              linkURL='https://apps.apple.com/us/app/smartgear-mobile/id1467350072'
              projectDescription={`
                The Android / iOS SmartGear Mobile App is for owners of low voltage switchgear and switchboards.
                Using this app, users can monitor, control and configure these devices enabling
                the users to undertake start up, trouble shoot and perform certain maintenance of
                them safely away from the arc flash boundary of the equipment.
              `}
              projectName='Siemens Sm@rtGear Mobile'
              imageURL='https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/27/e7/70/27e770d7-397d-734f-b0f5-0866866318f2/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/690x0w.png'
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <ProjectHighlightCard
              linkURL='https://github.com/Cloud-Automation/node-modbus/tree/v4.0-dev'
              projectDescription={`
                jsmodbus is a simple Modbus TCP/RTU Client/Server with a simple API.
                It supports modbus function codes 1 - 6 and 15 and 16.
              `}
              projectName='Opensource Project "jsmodbus"'
              imageURL='/images/js-modbus-logo.jpg'
            />
          </Grid>

        </Grid>
      </Container>

    </div>
  )
}
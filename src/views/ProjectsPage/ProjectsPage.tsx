import React from 'react'
import { PageHeaderTypography } from '../../components/MainPageHeader'
import { Project } from './Project'
import { List, Grid, Typography, Link, Divider, GridList, GridListTile, makeStyles, IconButton, Button, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { YoutubeVideo } from '../../components/YoutubeVideo'
import { GithubProjectList } from './GithubProjectList'


const useStyles = makeStyles((theme) =>
  ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '100%',
      height: 450,
    },
  }),
);

export const ProjectsPage: React.FC = () => {

  const classes = useStyles();


  const FIRST_ROBOTICS_CLUB_IMAGES = [
    {
      title: '1',
      img: '/images/projects/first-robotics/1.png',
      cols: 1,
    },
    {
      title: '2',
      img: '/images/projects/first-robotics/2.png',
      cols: 1,
    },
    {
      title: '3',
      img: '/images/projects/first-robotics/3.png',
      cols: 1,
    },
    {
      title: '4',
      img: '/images/projects/first-robotics/4.png',
      cols: 1,
    },
    {
      title: '5',
      img: '/images/projects/first-robotics/5.png',
      cols: 1,
    },
    {
      title: '6',
      img: '/images/projects/first-robotics/6.png',
      cols: 1,
    },
    {
      title: '7',
      img: '/images/projects/first-robotics/7.png',
      cols: 1,
    },
  ]
  return (
    <div>
      <PageHeaderTypography title='Projects' />

      <Grid container spacing={4}>


        <GithubProjectList />

        <Project title='Siemens Sm@rtGear Pro'>
          <img
            alt="Sm@rtGearTM Technology"
            src="https://assets.new.siemens.com/siemens/assets/api/uuid:1a1739fc-38e1-41c2-b53d-41c6377c0220/width:640/quality:high/version:1567171245/smarttechnology.png"
            width="526px" />

          <Typography variant='body1'>
            Intelligent devices (circuit breakers, relays, meters, etc.) have existed for more than 30 years.
            These devices are self-monitoring, configurable, and communicating, but individually they are only
            islands of intelligence. Historically integrated remote monitoring, configuration, and control have
            only been available with the inclusion of upstream PMCS, PCS, DCS, or SCADA systems. With the advent
            of Siemens Sma@rtGear™ technology, remote monitoring, configuration, and control are standard features
            that are integral to the electrical apparatus product.
          </Typography>
          <br />

          <YoutubeVideo width='560' height='315' videoURL='https://www.youtube.com/embed/MQfU_-69LzA' />

        </Project>

        <Project title='Siemens Sm@rtGear Mobile'>
          <img
            alt="Sm@rtGearTM Technology"
            src="https://assets.new.siemens.com/siemens/assets/api/uuid:f26216e1-334d-41be-ad93-dd2ebe219690/width:750/quality:high/version:1566430192/smrtmobilefigure1.png"
            width="526px" />

          <Typography variant='body1'>
            Siemens is expanding its Sm@rtGear portfolio to include mobile devices. Sm@rtGear Mobile allows
            the user to interface with their gear using an Apple or Android device; and to remotely monitor,
            configure, and control the equipment wirelessly or via hardwired connection using a mobile phone
            or tablet. The application works with switchboards, low voltage switchgear, and power panels.
            Supported intelligent devices include digital meters (PAC, 9410 and 9810),
            VL breakers, WL breakers, and SEM3 sub-metering.
          </Typography>
          <br />

        </Project>


        <Project title='Audi Automated Guided Vehicle'>
          <Typography variant='body1'>
            The future is industry 4.0. Technology is getting progressively more complex and it only makes sense that the production process will also rise in complexity. At some point it is more efficient to fully automate the assembly process to pick up the slack created by repetitive task workers.

            I was involved in the development of an Automated Guided Vehicle (AGV) designed with the purpose of delivering parts to the assembly line.

            The Audi AGV is a natural feature recognition mobile robot. As an automated guided vehicle, it can navigate throughout busy and dynamic production environments while being safe for both other vehicles and persons. It provides this safety by a watchdog algorithm that monitors specified zones (e.g. a right of way or a one lane road) for trolleys that may be in the planned mission path. It also guarantees human safety by monitoring for objects entering into its path and automatically brakes before any collision.
          </Typography>
          <br />

          <YoutubeVideo width='560' height='315' videoURL='https://www.youtube.com/embed/e-uZFWph0wQ' />

          <Divider />

          <br />

          <Typography variant='h5'>
            News articles about the AGV project
          </Typography>

          <p>
            <Link href="https://www.youtube.com/embed/sqCbYd8O8MU?rel=0"> [Car TV] 2016 Audi Smart Factory – Future of Audi Production</Link>
            <br />
            <Link href="http://www.autocar.co.uk/car-news/motor-shows-la-motor-show/audi-predicts-death-production-line">[autocar.co.uk] Audi predicts the death of the production line</Link>
            <br />
            <Link href="http://www.automotiveit.eu/54697-2/news/id-0054697">[automotiveit] Audi zeigt die Produktion der Zukunft</Link>
          </p>

        </Project>

        <Project title='Driveworks CAD Automation' subtitle='Pharmaworks Inc.'>
          <Typography variant='body1'>
            Under the mentorship of the tooling engineers at Pharmaworks, I have been developing a CAD automation tool&nbsp;to automate their designs and&nbsp;save time on design work and quoting. I use an applied Visual Basic programming language along with the software package DriveWorks to create these plugins. This project involved knowledge on:
            <ol>
              <li>Material properties</li>
              <li>Machine shop practices</li>
              <li>Solidworks (CAD)</li>
              <li>Drafting</li>
              <li>Visual Basic</li>
              <li>Driveworks</li>
              <li>Graphic design</li>
              <li>Geometric analysis</li>
              <li>Algorithm creation / optimization</li>
            </ol>
          </Typography>

          <Typography variant='h5'>
            Screenshots
          </Typography>
          <a href='/images/projects/driveworks/1.png'>
            <img width='80%' src='/images/projects/driveworks/1.png' />
          </a>
          <a href='/images/projects/driveworks/2.png'>
            <img width='80%' src='/images/projects/driveworks/2.png' />
          </a>
        </Project>

        <Project title='FIRST Robotics Club'>

          <YoutubeVideo width='560' height='315' videoURL='https://www.youtube.com/embed/vAlh5KbqKdM' />
          <Typography variant='caption'>
            First Tech Challenge Team 2868 Smoke and Mirrors team video for competition season 2012-2013 "Ring It Up"
          </Typography>

          <GridList cellHeight={160} className={classes.gridList} cols={5}>
            {FIRST_ROBOTICS_CLUB_IMAGES.map(data => (
              <GridListTile key={data.img} cols={data.cols}>
                <img src={data.img} alt={data.title} />
              </GridListTile>
            ))}
          </GridList>
        </Project>

      </Grid>
    </div >
  )
}
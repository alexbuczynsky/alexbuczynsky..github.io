import React from 'react';

import { Project } from '../Project'
import {
  Typography,
  GridList,
  GridListTile,
  makeStyles,
} from '@material-ui/core'
import { YoutubeVideo } from '../../../components/YoutubeVideo'


const useStyles = makeStyles((theme) =>
  ({
    gridList: {
      width: '100%',
      height: 450,
    },
  }),
);



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
] as const;

export const FIRSTRoboticsProject: React.FC = () => {

  const classes = useStyles();


  return (
    <Project title='FIRST Robotics Club'>

      <YoutubeVideo width='100%' height='300px' videoURL='https://www.youtube.com/embed/vAlh5KbqKdM' />
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

  )
}
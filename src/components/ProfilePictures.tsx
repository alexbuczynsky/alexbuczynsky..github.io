import React from 'react';
import headShot from '../assets/head-shot.jpg';
import { Fade, Grow } from '@material-ui/core';

export const ProfilePicture: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <Fade in timeout={500}>
      <img alt='ProfilePicture' {...props} src={headShot} />
    </Fade>
  )
}
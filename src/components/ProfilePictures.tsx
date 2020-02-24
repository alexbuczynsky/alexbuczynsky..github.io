import React from 'react';
import headShot from '../assets/head-shot.jpg';
import Grow from '@material-ui/core/Grow';

export const ProfilePicture: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <Grow in timeout={800}>
      <img alt='ProfilePicture' {...props} src={headShot} />
    </Grow>
  )
}
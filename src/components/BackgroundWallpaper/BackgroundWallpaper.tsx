import React from 'react';
import { useTheme } from '@material-ui/core';
import { lighten, darken } from '@material-ui/core/styles';
import { NotchedRectangle } from './decorators/NotchedRectangle';

export const BackgroundWallpaper: React.FC = () => {
  const theme = useTheme();


  const primaryMain = theme.palette.primary.main;

  const style: React.CSSProperties = {
    background: `linear-gradient(30deg, ${darken(primaryMain, 0.65)} 8%, ${darken(primaryMain, 0.2)} 65%, ${lighten(primaryMain, 0.1)} 95%)`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // filter: 'blur(4px)',
  }

  return (
    <div style={style}>
      <NotchedRectangle
        top='0vh'
        left='-20vw'
        width='60vw'
        height='5vh'
        opacity='70%'
        transform='rotate(-45deg)'
        borderRadius='4%'
      />
      <NotchedRectangle
        top='10vh'
        left='-20vw'
        width='60vw'
        height='5vh'
        opacity='70%'
        transform='rotate(-45deg)'
        borderRadius='4%'
      />
      <NotchedRectangle
        top='20vh'
        left='-20vw'
        width='60vw'
        height='5vh'
        opacity='70%'
        transform='rotate(-45deg)'
        borderRadius='4%'
        background={theme.palette.secondary.dark}
      />
      <NotchedRectangle
        top='30vh'
        left='-20vw'
        width='60vw'
        height='5vh'
        opacity='60%'
        transform='rotate(-45deg)'
        borderRadius='4%'
      />
      <NotchedRectangle
        top='40vh'
        left='-20vw'
        width='60vw'
        height='5vh'
        opacity='50%'
        transform='rotate(-45deg)'
        borderRadius='4%'
      />
      <NotchedRectangle
        top='50vh'
        left='-20vw'
        width='60vw'
        height='5vh'
        opacity='40%'
        transform='rotate(-45deg)'
        borderRadius='4%'
      />
    </div>
  )
}
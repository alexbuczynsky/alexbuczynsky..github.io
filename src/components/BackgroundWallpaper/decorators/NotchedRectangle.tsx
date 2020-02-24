import React from 'react'
import '../BackgroundWallpaper.css'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => (
  {
    rectangle: {
      position: 'absolute',
      width: '25px',
      height: '45px',
      background: theme.palette.primary.light,
    }
  }
))

type Props = React.CSSProperties & {
  className?: string;
}

export const NotchedRectangle: React.FC<Props> = (props) => {
  const classes = useStyles();

  const itemStyle: React.CSSProperties = props;

  return (
    <span style={itemStyle} className={classes.rectangle + ' fade-in ' + props.className} />
  )
}
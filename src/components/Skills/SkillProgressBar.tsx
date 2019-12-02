import React, { CSSProperties } from 'react'
import {
  makeStyles,
  Button,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Grow,
} from '@material-ui/core'
import './SkillProgressBar.css'

import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  Frame: {
    height: theme.spacing(1),
    width: '100%',
    background: theme.palette.background.default,
  },
  primaryFilled: {
    background: theme.palette.primary.main,
  },
  secondaryFilled: {
    background: theme.palette.secondary.main,
  },
}))



type Props = React.HTMLAttributes<HTMLDivElement> & {
  percent: number;
  noAnimation?: boolean;
  variant?: 'primary' | 'secondary';
  timeout?: number;
}

export const SkillProgressBar: React.FC<Props> = (props) => {

  const classes = useStyles({})

  const {
    percent,
    className,
    noAnimation = false,
    variant = 'primary',
    timeout = 1000,
    ...otherProps
  } = props;

  const leftStyle: CSSProperties = {
    height: '100%',
    width: `${percent}%`,
    animationDuration: `${timeout}ms`
  }

  const frameClassName = clsx(
    classes.Frame,
    className
  );

  const progressBarClassName = clsx({
    ['AnimatedProgressBar']: !noAnimation,
    [classes.primaryFilled]: variant === 'primary',
    [classes.secondaryFilled]: variant === 'secondary'
  });

  return (
    <div
      className={frameClassName}
      {...otherProps}
    >
      <div className={progressBarClassName} style={leftStyle} />
    </div>
  )
}
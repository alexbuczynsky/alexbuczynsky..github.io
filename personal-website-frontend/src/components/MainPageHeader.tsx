import React from 'react'
import { Typography } from '@material-ui/core'

interface Props {
  title: string;
}

export const PageHeaderTypography: React.FC<Props> = (props) => {
  return (
    <Typography variant='h4' style={{ marginBottom: '10px' }}>
      {props.title}
    </Typography>
  )
}
import React from 'react'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

interface Props {
  title: string;
}

export const PageHeaderTypography: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Typography variant='h4' style={{ marginBottom: '10px' }}>
        {props.title}
      </Typography>
      <Divider />
    </React.Fragment>

  )
}
import React from 'react'
import { Button } from '@material-ui/core'
import { ButtonProps } from '@material-ui/core/Button'


export const DownloadResumeButton: React.FC<Omit<ButtonProps, 'href'>> = (props) => {
  return (
    <Button href='/docs/Alexander%20Buczynsky%20Resume.pdf' color='secondary' variant='contained' {...props}>
      Download Resume
    </Button>
  )
}
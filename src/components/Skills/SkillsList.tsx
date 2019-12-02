import React from 'react'
import { Button, Typography, Grid, Card, CardHeader, CardContent } from '@material-ui/core'
import { ButtonProps } from '@material-ui/core/Button'
import { SkillProgressBar } from './SkillProgressBar'
import { Skill } from './Skill';

type Props = {

}

export const SkillsList: React.FC<Props> = (props) => {
  return (
    <Grid container spacing={2}>

      <Grid item xs={12} sm={6} md={4}>
        <Card elevation={4}>
          <CardHeader title='Front-End Development' />
          <CardContent>
            <Skill variant='body1' description='HTML/CSS' percent={50} />
            <Skill variant='body1' description='Bootstrap' percent={50} />
            <Skill variant='body1' description='HTML/CSS' percent={50} />
            <Typography variant='body1'>
              HTMl/CSS, Sass, Bootstrap, JavaScript, Jquery, React.js, React Native, and Angular
            </Typography>
            <SkillProgressBar percent={60} />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Card elevation={4}>
          <CardHeader title='Back-End / Server Design' />
          <CardContent>
            <Typography variant='body1'>
              Docker
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Card elevation={4}>
          <CardHeader title='Front-End Development' />
          <CardContent>
            <Typography variant='body1'>
              HTMl/CSS, Sass, Bootstrap, JavaScript, Jquery, React.js, React Native, and Angular
            </Typography>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  )
}
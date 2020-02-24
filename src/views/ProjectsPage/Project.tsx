import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

type Props = {
  title?: string;
  subtitle?: string;
}

export const Project: React.FC<Props> = (props) => {
  const classes = useStyles();


  const projectTitle = props.title || 'project title';


  return (
    <Grid item xs={12}>
      <Card className={classes.card} elevation={1}>

        <CardHeader
          title={projectTitle}
          subheader={props.subtitle}
        />

        <CardContent>

          {props.children}

        </CardContent>

      </Card>
    </Grid>
  )
}
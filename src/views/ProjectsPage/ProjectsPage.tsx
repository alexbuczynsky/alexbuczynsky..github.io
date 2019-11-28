import React from 'react'
import { PageHeaderTypography } from '../../components/MainPageHeader'
import { Project } from './Project'
import { List, Grid, Typography, Link, Divider, GridList, GridListTile, makeStyles, IconButton, Button, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { YoutubeVideo } from '../../components/YoutubeVideo'
import { GithubProjectList } from './GithubProjectList'

import {
  SmartGearProProject,
  SmartGearMobileProject,
  AudiAGVProject,
  CADAutomationProject,
  FIRSTRoboticsProject,
} from './projects'

export const ProjectsPage: React.FC = () => {



  return (
    <div>
      <PageHeaderTypography title='Projects' />

      <Grid container spacing={4}>


        <GithubProjectList />

        <SmartGearProProject />

        <SmartGearMobileProject />


        <AudiAGVProject />

        <CADAutomationProject />

        <FIRSTRoboticsProject />

      </Grid>
    </div >
  )
}
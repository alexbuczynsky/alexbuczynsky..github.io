import React from 'react'
import { PageHeaderTypography } from '../../components/MainPageHeader'
import Grid from '@material-ui/core/Grid'
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
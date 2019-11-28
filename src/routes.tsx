import React from 'react'
import { Route } from 'react-router'
import { Resume } from './views/Home/Resume'
import { ProjectsPage } from './views/ProjectsPage'
import { ContactPage } from './views/ContactPage'
import { AboutPage } from './views/AboutPage'


import {
  SmartGearProProject,
  SmartGearMobileProject,
  AudiAGVProject,
  CADAutomationProject,
  FIRSTRoboticsProject,
} from './views/ProjectsPage/projects'

export const AllRoutes = (
  <React.Fragment>
    <Route exact path="/">
      <AboutPage />
    </Route>
    <Route exact path="/projects">
      <ProjectsPage />
    </Route>
    <Route exact path="/resume">
      <Resume />
    </Route>
    <Route exact path="/contact">
      <ContactPage />
    </Route>

    <Route exact path="/projects-smart-gear-pro">
      <SmartGearProProject />
    </Route>
    <Route exact path="/projects-smart-gear-mobile">
      <SmartGearMobileProject />
    </Route>
    <Route exact path="/projects-audi-agv">
      <AudiAGVProject />
    </Route>
    <Route exact path="/projects-cad-automation">
      <CADAutomationProject />
    </Route>
    <Route exact path="/projects-first-robotics">
      <FIRSTRoboticsProject />
    </Route>
  </React.Fragment>
)
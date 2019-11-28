import React from 'react'
import { Route, Switch } from 'react-router'
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


const Page404 = ({ location }: { location: any }) => (
  <div>
    <h2>No match found for <code>{location.pathname}</code></h2>
  </div>
);

export const AllRoutes = (
  <Switch>
    <Route path="/" exact component={AboutPage} />
    <Route path="/projects" exact component={ProjectsPage} />
    <Route path="/resume" exact component={Resume} />
    <Route path="/contact" exact component={ContactPage} />
    <Route path="/projects-smart-gear-pro" component={SmartGearProProject} />
    <Route path="/projects-smart-gear-mobile" component={SmartGearMobileProject} />
    <Route path="/projects-audi-agv" component={AudiAGVProject} />
    <Route path="/projects-cad-automation" component={CADAutomationProject} />
    <Route path="/projects-first-robotics" component={FIRSTRoboticsProject} />
    <Route component={Page404} />
  </Switch>
)
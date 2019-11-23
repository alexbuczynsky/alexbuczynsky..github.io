import React from 'react'
import { Route } from 'react-router'
import { Resume } from './views/Home/Resume'
import { ProjectsPage } from './views/ProjectsPage'
import { ContactPage } from './views/ContactPage'
import { AboutPage } from './views/AboutPage'

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
  </React.Fragment>
)
import React from 'react';

import Typography from '@material-ui/core/Typography'
import { Project } from '../Project'

export const CADAutomationProject: React.FC = () => {
  return (
    <Project title='Driveworks CAD Automation' subtitle='Pharmaworks Inc.'>
      <Typography variant='body1'>
        Under the mentorship of the tooling engineers at Pharmaworks, I have been developing a CAD automation tool&nbsp;to automate their designs and&nbsp;save time on design work and quoting. I use an applied Visual Basic programming language along with the software package DriveWorks to create these plugins. This project involved knowledge on:
            <ol>
          <li>Material properties</li>
          <li>Machine shop practices</li>
          <li>Solidworks (CAD)</li>
          <li>Drafting</li>
          <li>Visual Basic</li>
          <li>Driveworks</li>
          <li>Graphic design</li>
          <li>Geometric analysis</li>
          <li>Algorithm creation / optimization</li>
        </ol>
      </Typography>

      <Typography variant='h5'>
        Screenshots
      </Typography>
      <a href='/images/projects/driveworks/1.png'>
        <img width='80%' src='/images/projects/driveworks/1.png' />
      </a>
      <a href='/images/projects/driveworks/2.png'>
        <img width='80%' src='/images/projects/driveworks/2.png' />
      </a>
    </Project>
  )
}
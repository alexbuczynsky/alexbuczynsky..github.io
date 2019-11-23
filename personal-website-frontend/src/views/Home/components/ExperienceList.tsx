import React from 'react'
import { List } from '@material-ui/core'
import { ExperienceListItem } from './ExperienceListItem'

export const ExperienceList: React.FC = (props) => {
  return (
    <List>
      <ExperienceListItem
        company='Siemens'
        jobTitle='Senior Software Engineer'
        logoUrl='https://media.licdn.com/dms/image/C560BAQFhWaZpyqSMfg/company-logo_100_100/0?e=1582761600&v=beta&t=nTmQan79HbfBI5_Tp951ccDPspceaD7ECH0ig_ekgg0'
        location='Dallas, Texas'
        startDate='May 2017'
        endDate='Present'
        bulletPoints={[
          'Responsible for the design and implementation of the microservice architecture in Sm@rtGear automation products.',
          'Lead software developer for the Siemens Edge DCU product.',
          'Responsible for Mindsphere cloud application development, deployment, and distribution.',
          'Responsible for developing IOT solutions for Energy Utility Applications.',
        ]}
      />
      <ExperienceListItem
        company='Audi AG'
        jobTitle='Intern'
        logoUrl='https://media.licdn.com/dms/image/C4D0BAQHrHaKN5CBcdA/company-logo_400_400/0?e=1582761600&v=beta&t=VX2w14E9dRhItGxvY0vG-DCxGgw4mxfvgb9EZGwiNKc'
        location='Ingolstadt, Germany'
        startDate='May 2016'
        endDate='November 2016'
        bulletPoints={[
          'Involved with the development of the Audi Automated Guided vehicle (AGV) for use in assembly line production at Audi, AG.',
          'Developed a software application to track an automated guided vehicle AGV using both indoor and outdoor localization, providing a way to dynamically start the robot from any position in a production environment by interpolating wireless and bluetooth signals.',
        ]}
        seeMoreLink='https://vdmaimpulse.org/article/-/article/render/125593'
      />
      <ExperienceListItem
        company='Pharmaworks Inc'
        jobTitle='CAD Systems Automation Specialist'
        logoUrl='https://media.licdn.com/dms/image/C560BAQFXGWmdQXQC6g/company-logo_100_100/0?e=1582761600&v=beta&t=Vaos6CefighpdyQpDG8Qegsa3r-tw3jWiM74YHd-Msw'
        location='Odessa, Florida'
        startDate='May 2015'
        endDate='May 2017'
        bulletPoints={[
          'Responsible for automating the workflow of Mechanical Engineers working on Thermoforming Machines.',
          'Using a plugin for Solidworks called Driveworks, a program was created that automated the parts, assemblies, and drawings for an entire assembly line.',
        ]}
        seeMoreLink='https://goo.gl/ncji2Z'
      />
      <ExperienceListItem
        company='Pharmaworks Inc'
        jobTitle='Intern'
        logoUrl='https://media.licdn.com/dms/image/C560BAQFXGWmdQXQC6g/company-logo_100_100/0?e=1582761600&v=beta&t=Vaos6CefighpdyQpDG8Qegsa3r-tw3jWiM74YHd-Msw'
        location='Odessa, Florida'
        startDate='Jun 2010'
        endDate='Jun 2015'
        bulletPoints={[
          'I began my internship in the 9th grade. Through my experience working at Pharmaworks, I worked in several areas including, but not limited to, the departments of mechanical engineering, shipping, IT, inventory, machine assembly, and machine shop.',
          `
            Over the years I learned a lot about the principles of engineering through working on the assembly end
            of the manufacturing process. I learned simple things like the amount of force that can be applied to
            a 10mm bolt before stripping it, and when it does strip, how to take it out. I also learned through
            working in both the engineering department and the machine shop, that just because I can create a
            design in a CAD program like Solidworks, doesn't mean it will work when attempting to manufacture that same part.
          `,
          `
            In the fall of 2013 I shifted my focus to Solidworks based designs starting with CAD animations using Solidworks Composer.
            I created immersive CAD based training animations for our assembly tech and customers. For a long time our training
            department based all their training on Powerpoint presentations and constantly were reverting back to the white board to
            try to visually explain key concepts to our customers machine operators. By creating animations, I was able to eliminate
            the visual barrier that was bottle necking our training program.
          `
        ]}
        seeMoreLink='https://www.youtube.com/watch?v=WISv2bJhNL8&feature=emb_title'
      />
    </List>
  )
}
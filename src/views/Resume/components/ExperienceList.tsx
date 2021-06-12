import React from 'react'
import List from '@material-ui/core/List'
import { ExperienceListItem } from './ExperienceListItem'
import { IResumeExperience, useResume } from '../../../services/data-api'

export const ExperienceList: React.FC = (props) => {

  const [resume] = useResume()

  return (
    <List>
      {resume.experience.map(experience => resumeExperienceToListItem(experience))}
    </List>
  )
}

const resumeExperienceToListItem = (experience: IResumeExperience): JSX.Element => {
  const {
    company,
    jobTitle,
    start,
    end,
    location,
    responsibilities,
    seeMoreUrl
  } = experience

  return (
    <ExperienceListItem
      jobTitle={jobTitle}
      company={company.name}
      logoUrl={company.logo}
      location={location}
      startDate={start}
      endDate={end}
      bulletPoints={responsibilities}
      seeMoreLink={seeMoreUrl}
    />
  )
}
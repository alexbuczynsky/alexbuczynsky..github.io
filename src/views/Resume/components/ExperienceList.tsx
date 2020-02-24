import React from 'react'
import List from '@material-ui/core/List'
import { ExperienceListItem } from './ExperienceListItem'
import { useResume } from '../../../services/data-api'

export const ExperienceList: React.FC = (props) => {

  const [resume] = useResume()

  return (
    <List>
      {resume.experience.map(
        ({
          company,
          jobTitle,
          start,
          end,
          location,
          responsibilities,
          seeMoreUrl
        }) => (
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
      )}
    </List>
  )
}
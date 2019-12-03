import React, { HTMLAttributes } from 'react'
import { Button, Typography, Grid, Card, CardHeader, CardContent, LinearProgress } from '@material-ui/core'
import { ISkill } from '../../services/data-api'
import { Skill } from './Skill'


type Props = HTMLAttributes<HTMLDivElement> & {
  category: string;
  skills: ISkill[];
  hideProgressBar?: boolean;
  variant?: 'default' | 'simple';
}

type CardContentProps = {
  skills: ISkill[];
  hideProgressBar?: boolean;
}

const SimpleCardContent: React.FC<CardContentProps> = props => {
  const {
    skills,
    hideProgressBar,
  } = props;

  const skillNames = skills.map(skill => skill.name);

  return (
    <CardContent>
      <Typography variant='body1'>
        {skillNames.join(', ')}
      </Typography>
    </CardContent>
  )
}

const DefaultCardContent: React.FC<CardContentProps> = props => {
  const {
    skills,
    hideProgressBar,
  } = props;

  return (
    <CardContent>
      {
        skills.map(skill => (
          <Skill
            key={skill.name}
            variant='body1'
            progressBarVariant='primary'
            description={skill.name}
            percent={skill.percent}
            hideProgressBar={hideProgressBar}
          />
        ))
      }
    </CardContent>
  )
}

export const SkillCategoryCard: React.FC<Props> = props => {

  const {
    category,
    skills,
    hideProgressBar,
    variant = 'default',
    ...otherProps
  } = props;

  const sortedSkills = skills.sort((a, b) => b.percent - a.percent)

  return (
    <Card elevation={4} {...otherProps} >
      <CardHeader title={category} />
      {
        variant === 'default' ?
          <DefaultCardContent skills={sortedSkills} hideProgressBar={hideProgressBar} /> :
          <SimpleCardContent skills={sortedSkills} hideProgressBar={hideProgressBar} />
      }
    </Card>
  )
}
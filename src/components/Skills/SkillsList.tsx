import React, { useState, useEffect } from 'react'
import { Button, Typography, Grid, Card, CardHeader, CardContent, LinearProgress, Grow } from '@material-ui/core'
import { ButtonProps } from '@material-ui/core/Button'
import { SkillProgressBar } from './SkillProgressBar'
import { Skill } from './Skill';
import { ISkill, fetchSkills } from '../../services/data-api';
import { SkillCategoryCard } from './SkillCategoryCard';

type Props = {
  hideProgressBar?: boolean;
  variant?: 'default' | 'simple';
}

type State = {
  skills: ISkill[];
}

function sortSkillsByCategory(skills: ISkill[]) {
  const categories: Record<string, ISkill[]> = {};

  for (const skill of skills) {
    const {
      category,
    } = skill;

    if (!categories[category]) {
      categories[category] = [];
    }

    categories[category].push(skill);
  }

  return {
    categories,
    categoryNames: Object.keys(categories),
  };
}



export const SkillsList: React.FC<Props> = (props) => {

  const [state, setState] = useState<State>({
    skills: [],
  })


  const loadSkills = () => {
    return fetchSkills()
      .then(data => {
        // Wait a little longer to show the data to show the loading effect
        // setTimeout(() => {
        //   setState({
        //     skills: data,
        //     isLoading: false,
        //   })
        // }, 500)
        setState({
          skills: data,
        })

      })
      .catch(err => {
        setState({
          ...state,
        })
      })
  }

  useEffect(() => {
    loadSkills();
    setInterval(() => loadSkills(), 500)
  }, [])

  const { categories, categoryNames } = sortSkillsByCategory(state.skills);

  return (
    <Grid container spacing={2}>

      {
        categoryNames.map((category, index) => {

          // get the skills and sort by decreasing order of skill proficiency
          const skills = categories[category];

          return (
            <Grid key={category} item xs={12} sm={6} md={4}>
              <Grow in timeout={200 + 250 * index}>
                <SkillCategoryCard
                  key={category}
                  category={category}
                  skills={skills}
                  hideProgressBar={props.hideProgressBar}
                  variant={props.variant}
                />
              </Grow>
            </Grid>
          )
        })
      }

    </Grid>
  )
}
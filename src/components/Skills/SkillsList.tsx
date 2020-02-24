import React from 'react'

import Grid from '@material-ui/core/Grid'
import Grow from '@material-ui/core/Grow'

import { ISkill, useResume } from '../../services/data-api';
import { SkillCategoryCard } from './SkillCategoryCard';

type Props = {
  hideProgressBar?: boolean;
  variant?: 'default' | 'simple';
}

type SkillCategory = string
type SkillCategoryDictionary = Map<SkillCategory, Set<ISkill>>

function sortSkillsByCategory(skills: ISkill[]): SkillCategoryDictionary {

  const categories: SkillCategoryDictionary = new Map();

  for (const skill of skills) {
    const {
      category,
    } = skill;

    const categorySkills = categories.get(category) || new Set();

    categorySkills.add(skill)

    categories.set(category, categorySkills)
  }

  return categories;
}



export const SkillsList: React.FC<Props> = (props) => {

  const [resume] = useResume()

  const skillCategories: SkillCategoryDictionary = sortSkillsByCategory(resume.skills);

  return (
    <Grid container spacing={2}>

      {
        Array
          .from(skillCategories.entries())
          .map(([category, skills], index) => (
            <Grid key={category} item xs={12} sm={6} md={4}>
              <Grow in timeout={200 + 250 * index}>
                <SkillCategoryCard
                  key={category}
                  category={category}
                  skills={Array.from(skills.values())}
                  hideProgressBar={props.hideProgressBar}
                  variant={props.variant}
                />
              </Grow>
            </Grid>
          )
          )
      }

    </Grid>
  )
}
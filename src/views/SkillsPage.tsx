import React from 'react'
import { PageHeaderTypography } from '../components/MainPageHeader'
import { SkillsList } from '../components/Skills/SkillsList';


export const SkillsPage: React.FC = () => {
  return (
    <div>
      <PageHeaderTypography title='Skills' />
      <SkillsList />
    </div>
  )
}
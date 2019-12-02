import React from 'react';

import { SkillProgressBar } from './SkillProgressBar';
import { Typography } from '@material-ui/core';
import { ThemeStyle } from '@material-ui/core/styles/createTypography';

type Props = {
  hideProgressBar?: boolean;
  description: string;
  percent?: number;
  timeout?: number;
  variant?: ThemeStyle;
}

export const Skill: React.FC<Props> = props => {

  const {
    hideProgressBar = false,
    percent = 100,
    timeout,
    description,
    variant = 'body1'
  } = props;

  return (
    <div>
      <Typography variant={variant}>
        {description}
      </Typography>
      {!hideProgressBar &&
        <SkillProgressBar
          percent={percent}
          timeout={timeout}
        />}
    </div>
  )
}
import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import { ButtonProps } from '@material-ui/core/Button';

type SocialIconProps = ButtonProps & {
  href: string;
}

const BaseSocialIcon: React.FC<SocialIconProps> = (props) => {
  const {
    href,
    ...otherProps
  } = props;

  return (
    <Button href={href} {...otherProps}>
      {props.children}
    </Button>
  )
}

export const PersonalLinkedInIcon: React.FC<Omit<SocialIconProps, 'href'>> = (props) => {
  return (
    <BaseSocialIcon href="https://www.linkedin.com/in/alexbuczynsky/" {...props}>
      <LinkedInIcon />
    </BaseSocialIcon>
  )
}

export const PersonalGitHubIcon: React.FC<Omit<SocialIconProps, 'href'>> = (props) => {
  return (
    <BaseSocialIcon href="https://github.com/alexbuczynsky" {...props}>
      <GitHubIcon />
    </BaseSocialIcon>
  )
}
export const PersonalInstagramIcon: React.FC<Omit<SocialIconProps, 'href'>> = (props) => {
  return (
    <BaseSocialIcon href="https://www.instagram.com/alexbczy/" {...props}>
      <InstagramIcon />
    </BaseSocialIcon>
  )
}

export const PersonalTwitterIcon: React.FC<Omit<SocialIconProps, 'href'>> = (props) => {
  return (
    <BaseSocialIcon href="https://twitter.com/AlexBuczynsky" {...props}>
      <TwitterIcon />
    </BaseSocialIcon>
  )
}

export const PersonalEmailIcon: React.FC<Omit<SocialIconProps, 'href'>> = (props) => {
  return (
    <BaseSocialIcon href="mailto:a.buczynsky@gmail.com" {...props}>
      <EmailIcon />
    </BaseSocialIcon>
  )
}




import React from 'react'
import { PageHeaderTypography } from '../components/MainPageHeader'
import { PersonalLinkedInIcon, PersonalGitHubIcon, PersonalInstagramIcon, PersonalTwitterIcon, PersonalEmailIcon } from '../components/SocialMediaIcons'
import { ListItemAvatar, List, ListItem, ListItemText, Button, makeStyles, Divider, Grow } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone';


const useStyles = makeStyles(theme => ({
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
}));


export const ContactPage: React.FC = () => {

  const classes = useStyles();

  const timeout = 200;

  return (
    <div>

      <PageHeaderTypography title='Contact Me' />
      <List>
        <Grow in timeout={timeout}>
          <ListItem>
            <ListItemAvatar className={classes.listItemAvatar}>
              <Button href="tel:+1-813-300-5057" color='secondary' size='medium' variant='contained'>
                <PhoneIcon />
              </Button>
            </ListItemAvatar>
            <ListItemText primary='Phone' secondary='(813) 300-5057' />
          </ListItem>
        </Grow>
        <Divider variant='middle' />

        <Grow in timeout={timeout * 2}>
          <ListItem>
            <ListItemAvatar className={classes.listItemAvatar}>
              <PersonalEmailIcon color='secondary' size='medium' variant='contained' />
            </ListItemAvatar>
            <ListItemText primary='Email' secondary='a.buczynsky@gmail.com' />
          </ListItem>
        </Grow>
        <Divider variant='middle' />

        <Grow in timeout={timeout * 3}>
          <ListItem>
            <ListItemAvatar className={classes.listItemAvatar}>
              <PersonalLinkedInIcon color='secondary' size='medium' variant='contained' />
            </ListItemAvatar>
            <ListItemText primary='LinkedIn' secondary='linkedin.com/in/alexbuczynsky' />
          </ListItem>
        </Grow>
        <Divider variant='middle' />

        <Grow in timeout={timeout * 4}>
          <ListItem>
            <ListItemAvatar className={classes.listItemAvatar}>
              <PersonalGitHubIcon color='secondary' size='medium' variant='contained' />
            </ListItemAvatar>
            <ListItemText primary='Github' secondary='github.com/alexbuczynsky' />
          </ListItem>
        </Grow>
        <Divider variant='middle' />

        <Grow in timeout={timeout * 5}>
          <ListItem>
            <ListItemAvatar className={classes.listItemAvatar}>
              <PersonalInstagramIcon color='secondary' size='medium' variant='contained' />
            </ListItemAvatar>
            <ListItemText primary='Instagram' secondary='instagram.com/alexbczy' />
          </ListItem>
        </Grow>
        <Divider variant='middle' />

        <Grow in timeout={timeout * 6}>
          <ListItem>
            <ListItemAvatar className={classes.listItemAvatar}>
              <PersonalTwitterIcon color='secondary' size='medium' variant='contained' />
            </ListItemAvatar>
            <ListItemText primary='Twitter' secondary='twitter.com/alexbuczynsky' />
          </ListItem>
        </Grow>
        <Divider variant='middle' />


      </List>









    </div>
  )
}
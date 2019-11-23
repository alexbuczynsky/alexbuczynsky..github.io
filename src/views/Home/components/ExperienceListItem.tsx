import React from 'react'
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography, makeStyles, createStyles, Chip, List, Paper, Container, ExpansionPanel, ExpansionPanelSummary, Button } from '@material-ui/core'
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  bottomMargin: {
    marginBottom: theme.spacing(1),
  },
  paperWrapper: {
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    width: '100%'
  },
  responsibilitiesList: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }
}));

interface Props {
  logoUrl: string;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bulletPoints: string[];
  seeMoreLink?: string;
}

export const ExperienceListItem: React.FC<Props> = (props) => {

  const classes = useStyles();

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt="Logo" src={props.logoUrl} />
      </ListItemAvatar>
      <Paper className={classes.paperWrapper}>
        <ListItemText
          primary={props.company}
          primaryTypographyProps={{
            variant: 'h5'
          }}
          secondary={
            <React.Fragment>
              <Typography
                className={classes.bottomMargin}
                component="div"
                variant="body1"
                color="textPrimary"
              >
                {props.jobTitle}
              </Typography>
              <Typography
                component="div"
                variant="body2"
                color="textPrimary"
              >
                <Chip
                  icon={<LocationCityIcon />}
                  variant='outlined'
                  label={props.location}
                />
                <Chip
                  icon={<DateRangeOutlinedIcon />}
                  variant='outlined'
                  color='default'
                  label={`${props.startDate} - ${props.endDate}`}
                />

              </Typography>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >

              </Typography>

              <div className={classes.responsibilitiesList}>
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography variant='body1'>
                      Responsibilities
                    </Typography>
                  </ExpansionPanelSummary>

                  <List dense>
                    {props.bulletPoints.map(bulletPoint => (
                      <ListItem >
                        <ListItemAvatar>
                          <FiberManualRecordIcon />
                        </ListItemAvatar>
                        <ListItemText
                          primary={bulletPoint}
                        />
                      </ListItem>
                    ))}
                  </List>
                </ExpansionPanel>
              </div>

              {
                props.seeMoreLink && <Button href={props.seeMoreLink} size='small' color='primary' variant='outlined'>
                  See More
                  </Button>
              }


            </React.Fragment>
          }
        />
      </Paper>
    </ListItem>
  )
}
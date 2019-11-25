import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { ExternalLinkDialog } from '../../components/ExternalLinkDialog';
import { Grow } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 150,
  },
});

export type ProjectHighlight = {
  linkURL: string;
  projectName?: string;
  projectDescription?: string;
  imageURL?: string;
}


type Props = React.HTMLAttributes<HTMLDivElement> & ProjectHighlight & {
  growTimeout?: number;
};

export const ProjectHighlightCard: React.FC<Props> = (props) => {
  const classes = useStyles();


  const [open, setOpen] = React.useState(false);

  return (
    <Grow in timeout={props.growTimeout || 500}>
      <Card className={classes.card}>
        <CardActionArea onClick={() => setOpen(true)}>
          <CardMedia
            className={classes.media}
            image={props.imageURL}
            title="Project Picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.projectName || 'PROJECT NAME'}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.projectDescription || 'PROJECT DESCRIPTION'}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ExternalLinkDialog
            open={open}
            onOpenChange={setOpen}
            size="small"
            color="secondary"
            linkURL={props.linkURL}
          >
            Link to project
        </ExternalLinkDialog>
        </CardActions>
      </Card>
    </Grow>
  );
}
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }),
);

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = React.HTMLAttributes<HTMLDivElement> & ButtonProps & {
  linkURL: string;
  open?: boolean;
  onOpenChange?: (openState: boolean) => void;
}

export const ExternalLinkDialog: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.open === true);

  React.useEffect(() => {
    if (props.open) {
      setOpen(props.open);
    }
  }, [props.open])

  const handleClickOpen = () => {
    props.onOpenChange && props.onOpenChange(true)
    setOpen(true);
  };

  const handleClose = () => {
    props.onOpenChange && props.onOpenChange(false)
    setOpen(false);
  };

  return (
    <div>
      <Button {...props} onClick={handleClickOpen}>
        {props.children}
      </Button>
      <Dialog open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Button autoFocus color="inherit" onClick={handleClose} href={props.linkURL}>
              Continue to external site...
            </Button>
          </Toolbar>
        </AppBar>
      </Dialog>
    </div>
  );
}
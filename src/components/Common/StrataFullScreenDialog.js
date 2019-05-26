import React from 'react';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { AppBar, Collapse, Typography, IconButton, Toolbar, Dialog } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

export const StrataFullScreenDialog = ({ classes, label, open, onBack, children }) => {
  return (
    <Collapse in={true}>
      <Dialog fullScreen open={open} onClose={onBack} TransitionComponent={Transition}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton color="inherit" onClick={onBack} aria-label="Close">
              <ArrowBack />
            </IconButton>
            <Typography variant="h6" color="inherit">
              {label}
            </Typography>
          </Toolbar>
        </AppBar>
        {children}
      </Dialog>
    </Collapse>
  );
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});
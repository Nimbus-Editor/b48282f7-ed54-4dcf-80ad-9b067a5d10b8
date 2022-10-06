import React from 'react';
import Page1Style from './Page1Style';
import {withStyles} from '@material-ui/core';

const Page1 = props => {
  const {classes} = props;

  return (
    <div className={classes.root}>
    </div>
  );
};


export default withStyles(Page1Style)(Page1);
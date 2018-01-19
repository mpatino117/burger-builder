import React from 'react';

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'

const sideDrawer = () => {
  return (
    <div>
      <Logo className={classes.SideDrawer}/>
      <NavigationItems />
    </div>
  );
};

export default sideDrawer;
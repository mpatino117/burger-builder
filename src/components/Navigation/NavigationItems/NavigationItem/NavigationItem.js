import React from 'react';


import classes from './NavigationItem.css'

const navigationItems = (props) => (
  <li className={classes.NavigationItem}>
    <a href={classes.link} className={props.active ? classes.active : null}> A Link  </a>
  </li>

)

export default navigationItems;


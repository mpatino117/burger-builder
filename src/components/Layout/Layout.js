import React from 'react'

// higher order function component imported as wrapper a black element

import Aux from '../../hoc/Aux'
import classes from './Layout.css'
// create layout
// stateless component
// main element is where conent will be primarly displayed


const Layout = (props) => (
  <Aux>
    {/* temporary nav for now */}
    <div> Toolbar, sideDrawer, Backdrop</div>
    <main className={classes.content} >
      {props.children}
    </main>
  </Aux>
)

export default Layout
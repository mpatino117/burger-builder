import React, { Component } from 'react';

import classes from './Modal.css'
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'


class Modal extends Component {

 shouldComponentUpdate(nextProps, nextState){
   console.log(nextProps,"nextprops")

   console.log(this.props.show,"present")



   return nextProps.show !== this.props.show
  }

  componentDidUpdate(){
    console.log('model upated') 
  }

  render(){
    return(
      <Aux>
        <Backdrop show={this.props.show} />
          <div className={classes.Modal}
          style={{
            transform:this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'     
            }}
            >
            {this.props.children}
          </div>
      </Aux> 
    )
  }
}

export default Modal
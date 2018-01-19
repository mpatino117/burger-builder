import React, { Component } from 'react';

import Aux from '../../../hoc/Aux'
import Button from '../Buttons/Button'

class OrderSummary extends Component{
  render(){
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map((igKey, index) => {
        return <li key={index}  > <span style={{textTransform: 'capatalize'}}> {igKey}</span>  </li>
      })
    return(
      <Aux> 
        <h3> Your order </h3>
        <p> A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul> 
        <p> <strong> Price: {this.props.price} </strong> </p>
        <Button btnType="Danger" onClick={this.props.cancelOrder}> cancel </Button>
        <Button btnType="Success" onClick={this.props.acceptOrder}> accept </Button>
    </Aux>
    )
  }
}

export default OrderSummary;
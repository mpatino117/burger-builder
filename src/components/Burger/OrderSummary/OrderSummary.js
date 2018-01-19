import React from 'react';

import Aux from '../../../hoc/Aux'
import Button from '../Buttons/Button'

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map((igKey, index) => {
      return <li key={index}  > <span style={{textTransform: 'capatalize'}}> {igKey}</span>  </li>
    })
  return (
    <Aux>
   
      <h3> Your order </h3>
      <p> A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
       </ul> 

       {/* butons components */}
        <p> <strong> Price: {props.price} </strong> </p>
        <Button btnType="Danger" onClick={props.cancelOrder}> cancel </Button>
        <Button btnType="Success" onClick={props.acceptOrder}> accept </Button>
   
    </Aux>
  )
}

export default OrderSummary;
import React from 'react';

import Aux from '../../../hoc/Aux'

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return <li> <span style={{textTransform: 'capatalize'}}> {igKey}</span>  </li>
    })
  return (
    <Aux>
      <h3> Your order </h3>
      <p> A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
       </ul> 
    </Aux>
  )
}

export default OrderSummary;
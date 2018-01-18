import React from 'react';

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {

  const dd = Object.keys(props.ingredients)

  console.log(dd)
  const transformIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      var d = [...Array(props.ingredients[igKey])]

      return [...Array(props.ingredients[igKey])]
      .map((_, i) => {
        return(
          <BurgerIngredient key={igKey + i} type={igKey} />
        )
      })
    }) 
    
  
  return (
    
    <div className={classes.Burger}>

      <BurgerIngredient type='bread-top'/>
          {transformIngredients}
      <BurgerIngredient type='bread-bottom'/>

      
    </div>
  );
};


export default Burger;
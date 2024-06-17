import React from 'react'
import "./App.css"

const App=()=>{
  return(
    <>
    <div class="container">

    <h1> INCREMENT/DECREMENT COUNTER </h1>
    <h4> Using React and Redux </h4>

<div class="quantity">
  <a class="quantity_minus" title="Decrement"><span> - </span></a>
  <input name="quantity" type="text" class="quantity__input" value="0"/>
  <a class="quantity_plus" title="Increment"><span> + </span></a>
</div>
    </div>
    
    </>
  )
}

export default App
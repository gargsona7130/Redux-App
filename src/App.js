import React from 'react'
import "./App.css"

const App=()=>{
  return(
    <>
    <div className="container">

    <h1> INCREMENT/DECREMENT COUNTER </h1>
    <h4> Using React and Redux </h4>

<div className="quantity">
  <a className="quantity_minus" title="Decrement"><span> - </span></a>
  <input name="quantity" type="text" className="quantity__input"/>
  <a className="quantity_plus" title="Increment"><span> + </span></a>
</div>
    </div>
    
    </>
  )
}

export default App
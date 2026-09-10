import React from 'react'

const App = () => {
  function clickButton(){
    console.log("Button Clicked");
    
  }
  return (
    <div>
      <button onClick={clickButton}>Click Me</button>
      <input onChange={(dats)=>{
        console.log(dats.target.value);
      }} type="text" placeholder='Enter Name' />
    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'

const App = () => {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  
  let handleNum1=()=>{
    console.log('Number 1 is changed...')
  }

  let handleNum2=()=>{
    console.log('Number 2 is changed...')
  }

  useEffect(function(){
    handleNum1();
  }, [num1])

  useEffect(function(){
    handleNum2();
  }, [num2])

  return (
    <div>
      <h2>Number 1 is {num1}</h2>
      <h2>Number 2 is {num2}</h2>
      <button onClick={()=>{
        setNum1(num1+1)
      }}>Num 1</button>

      <button onClick={()=>{
        setNum2(num2-1)
      }}>Num 2</button>
    </div>
  )
}

export default App
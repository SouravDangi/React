import React, { useState } from 'react'

const App = () => {
  const [title, settarget] = useState('')

  const formSubmited=(e)=>{
    e.preventDefault();
    console.log("Form Submited by", title)
    settarget('');
  }
  return (
    <div>
    <form 
    onSubmit={(e)=>{
          formSubmited(e);
        }}
    >
        <input type="text" placeholder='Enter Name'
        value={title}
        onChange={(e)=>{
      settarget(e.target.value)
    }} 
    />
    
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
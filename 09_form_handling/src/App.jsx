import React from 'react'

const App = () => {
  const formSubmited=(e)=>{
    e.preventDefault();
    console.log("Form Submited");
  }
  return (
    <div>
    <form onSubmit={(e)=>{
      formSubmited(e)
      }}>
        <input type="text" placeholder='Enter Name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
import React from 'react'

const App = () => {

  localStorage.setItem('name','Saurabh');
  console.log(localStorage.getItem('name'));
  const user = {
    username: 'Saurabh',
    age: 23,
    city: 'Dehradun'
  }

  localStorage.setItem('user', JSON.stringify(user))
  const usera = JSON.parse(localStorage.getItem('user'))

  console.log(usera);
  return (
    <div>App</div>
  )
}

export default App
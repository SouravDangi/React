import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Saurabh' age={23} img='https://images.unsplash.com/photo-1786288042250-1258f5839eaf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Sumit' age={20} img='https://images.unsplash.com/photo-1786575509485-c9ad40a7a953?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzJ8fHxlbnwwfHx8fHw%3D' />
      <Card user='Prachi' age={17} img='https://images.unsplash.com/photo-1786806571457-6fa59a249ceb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOTh8fHxlbnwwfHx8fHw%3D'/>
      <Card user='Puesh' age={8} img='https://images.unsplash.com/photo-1786625059950-00529301397c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNTJ8fHxlbnwwfHx8fHw%3D' />
    </div>
  )
}

export default App

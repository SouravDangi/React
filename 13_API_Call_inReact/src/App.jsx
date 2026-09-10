import { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])

// Using Fatch
  const getData= async ()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data=await response.json();
    console.log(data);
  }

// Using axios
  const getData2= async ()=>{
    const response2=await axios.get('https://picsum.photos/v2/list?page=2&limit=100');
    console.log(response2.data);
    setData(response2.data);
  }
  
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <button onClick={getData2}>Get Data2</button>

        { data.map(function(elem, index){
          return <div key={elem.id}>{elem.author}, {index}</div>
        })
        }
      
    </div>
  )
}

export default App
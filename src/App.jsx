import axios from "axios"
import { useEffect, useState } from "react"
import './App.css'
function App() {
  const [data, setData] = useState([])


  useEffect(() => {
    fetch("http://localhost:8000/users")
    .then(res => res.json())
    .then(data=>setData(data))
  }, [])


  const deleteData = function (id) {
  axios.delete(`http://localhost:8000/users/${id}`)
  }
  
  console.log(data);
  
  return (
    <div>
      <table border={2}>
        <thead>
          <tr>
<th>Id</th>
<th>Name</th>
<th>Email</th>
<th>Age</th>
          </tr>
        </thead>
        <tbody>{
          data.map(item=>{
            return(
              <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
              <td className='deleteBtn'><button onClick={()=>deleteData(item.id)}>X</button></td>
             </tr>
            )
          })
}
         </tbody>
      </table>
    </div>
  )
}

export default App
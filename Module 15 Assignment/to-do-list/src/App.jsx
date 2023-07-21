import { useState } from 'react'
import './App.css'

function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const addItem=()=>{
    list.push(item);
    setList([...list]);
  }
  const removeItem=(index)=>{
    list.splice(index,1);
    setList([...list]);
  }
  return (
    <>
      <input onChange={(e)=>setItem(e.target.value)}/>
      <button onClick={()=>addItem()}>Add</button>
      <br/><br/>
      <table>
        <tbody>
        {list.map((item,index)=>{
              return( 
                <tr>
                <td>{index}</td>
                <td>{item}</td>
                <td><button onClick={()=>removeItem(index)}>Remove</button></td>
              </tr>
              )
          })}
        </tbody>
      </table>
    </>
  )
}

export default App

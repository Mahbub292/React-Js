import { useState } from "react";


function App() {

  let [list, setList] = useState([]);
  let [item, setItem] = useState("");

  const addItemInList = ()=>{
    list.push(item);
    setList([...list]);
    
  }
  const removeFromList = (index)=>{
    list.splice(index, 1);
    setList([...list]);
  }
  const submitHandler = (e)=>{
    e.preventDefault();
    setItem("");
   
  }

  return (
    <>
   
      
      <table>
        <tbody>
          {
            list.length !== 0?(
              list.map((element, index)=>{
                return (
                  <tr key={index.toString()}>
                    <td>{element}</td>
                    <td><button onClick={()=>{removeFromList(index)}}>remove</button></td>
                  </tr>
                )
              })
            )
            :(<tr></tr>)
          }
        </tbody>
      </table>
      <h1>{list.length}</h1>
      <form onSubmit={(e)=>submitHandler(e)}>
        <input onChange={(e)=>setItem(e.target.value)} placeholder="Item"/>
        <button type="submit" onClick={addItemInList}>Add</button>
      </form>
      
    </>
  )
}

export default App

import React from 'react'
import uuid from 'react-uuid';

function Task1() {

const initProds = [
  {id: "8a556ec3-7d24-d826-cfed-979f8bf79797",name:"prod1",catg:"catg1",cost:100},
  {id: "11b60199-8a14-5662-b059-150c67d1b1a0",name:"prod2",catg:"catg2",cost:200},
  {id: "72918f70-9428-50cc-21fb-fda3cf393bb2",name:"prod3",catg:"catg3",cost:300},
]
    
const [ notes, setNotes ] = React.useState(initProds)

const [ value, setValue ] = React.useState("")
const [ value1, setValue1 ] = React.useState("")
const [ value2, setValue2 ] = React.useState("")


const delNumber = (id) => {
  setNotes(notes.filter(note => note.id !== id))
}

const addNote = () => {
  setNotes([...notes,{id:uuid(),"name":{value},"catg":{value1},"cost":{value2}}])
}

const style = {
  "outline":"2px solid",
  "width":"300px",
  "text-align":"center"
}

const data = {
  id: "8a556ec3-7d24-d826-cfed-979f8bf79797",name:"new",catg:"new",cost:11110
}
const data2 = {
  id: "11b60199-8a14-5662-b059-150c67d1b1a0",name:"new2",catg:"new2",cost:22220
}
const data3 = {
  id: "72918f70-9428-50cc-21fb-fda3cf393bb2",name:"new3",catg:"new3",cost:33330
}

return (   
  <div>
    <table>
        <tr>
          <tr>
          <th style={style}> note.id</th>
          <th style={style}> note.name</th>
          <th style={style}> note.cost</th>
          <th style={style}></th>
        </tr>
          {
            notes.map((note,index) => (
              <div>
                <tr>
                  <td style={style} key = {index}>{note.id}</td>
                  <td style={style} key = {index}>{note.name}</td>
                  <td style={style} key = {index}>{note.cost}</td>
                  <td style={style}>
                    <button onClick={() => delNumber(note.id)}>Delete</button>
                  </td>
                </tr>  
              </div>
            ))
            }
        </tr>
    </table>
    <button onClick={() => setNotes(notes.map(note => note.id === data.id ? data : note)) }>Prod1</button>
    <button onClick={() => setNotes(notes.map(note => note.id === data2.id ? data2 : note))}>Prod2</button>
    <button onClick={() => setNotes(notes.map(note => note.id === data3.id ? data3 : note))}>Prod3</button><br></br>
    <input value={value} onChange={event => setValue(event.target.value)} />
    <input value={value1} onChange={event => setValue1(event.target.value)} />
    <input value={value2} onChange={event => setValue2(event.target.value)} />
    <button onClick = { addNote }>Add</button>
  </div>
);
}

export default Task1

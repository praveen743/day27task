import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

export default function App() {
  const [add, setAdd] = useState("");
  const [details, setDetails] = useState([]);

  const handleAdd = () => {
    setDetails([...details, add]);
    setAdd("");
  };

  const handleDelete = (idx) => {
    console.log(idx);
    const deleteElement = details.filter((val, ind) => {
      return ind !== idx;
    });
    setDetails(deleteElement);
  };

  return (
    <div className="App">
      <h1 className='header'>TO DO LIST</h1>
    <div className='container'>
    <div className='row'>
    <div className='col'>
      
        <input placeholder='enter the task here' className='input' type="text" value={add} onChange={(e) => setAdd(e.target.value)} />
        <button className='button' onClick={handleAdd}>Add</button>
      </div>
      </div>
      
        {details.map((value, id) => {
          return (
            <div className='task'
              key={id}
              >
              <p className='para'>{value}</p>
              <button className='button2' onClick={() => handleDelete(id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
     
     
  );
}
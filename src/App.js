import React, {useState} from 'react';
import Form from './components/Form';
import BoxDisplay from './components/BoxDisplay';
import './App.css';

function App() {
  const [boxList, setBoxList] = useState([]);
  return (
    <div className="App">
      <Form boxList={boxList} setBoxList={setBoxList} />
      <BoxDisplay boxList={boxList} />
    </div>
  );
}

export default App;

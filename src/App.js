import AddTask from './AddTask';
import './App.css';
import DisplayList from './DisplayList';
import Header from './Header';
import {useState} from 'react';

function App() {
  const [list, setList] = useState([
    {name: 'Wash the car', completed: false},
    {name: 'Do the dishes', completed: false},
    {name: 'Feed the dog', completed: true}
  ])
  return (
   <div className="app"> 
   <Header />,
   <AddTask setList={setList}/>,
   <DisplayList list={list} setList={setList}/>
   </div>
  );
}

export default App;



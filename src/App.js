import AddTask from './AddTask';
import './App.css';
import DisplayList from './DisplayList';
import Header from './Header';

function App() {
  return (
   <div className="app"> 
   <Header />,
   <AddTask />,
   <DisplayList />
   </div>
  );
}

export default App;

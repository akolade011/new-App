import logo from './logo.svg';
import './App.scss';
import Expenseitems from './components/Expenseitems.js';
const getName = prompt('Enter your name: ');
const getMpvie = prompt('Enter movie name: ');
const person2 = new Expenseitems(getName);
function App() {
  return (
    <div className="App">
      <h1>Your name is:{person2}</h1>
      <h1>Your movie name is:{getMpvie}</h1>
      {console.log(person2)}
    </div>
  );
}

export default App;

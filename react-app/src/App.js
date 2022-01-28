import logo from './logo.svg';
import './App.scss';
import ExpenseData from './components/Expenseitems.js';
// const getName = prompt('Enter your name: ');
// const getMpvie = prompt('Enter movie name: ');

function App() {
  let Data1 = new ExpenseData();
  return (
    <div>
      {}
      {Data1}
    </div>
  );
}

export default App;

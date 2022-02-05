import logo from './logo.svg';
import './App.scss';
import Expenseitems from './components/Expenseitems.js';
import Age from './components/Age';
let price = 2000;
let food = 'toast';
let description = 'most common food that I eat';
let age = 2;
let month = age * 12;
function App() {
  return (
    <div className="">
      <div>
        <Expenseitems
          food={food}
          price={price}
          description={description}
        ></Expenseitems>
        <Age years={age} />
        <Age months={month} />
        <h1>
          monnths = <Age months={month} />
        </h1>
      </div>
    </div>
  );
}

export default App;

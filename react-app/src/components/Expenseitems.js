import './Expenseitems.scss';

function Expenseitems(x) {
  const food = 'rice';
  const price = 20.0;
  const description = 'best food ever for the price of £20.00';
  function Expenseitems(input) {
    return (
      <div className="expense-item">
        <div className="expense-item__description">
          <h2>{food}</h2>
        </div>
        <div className="expense-item__price">
          <h2>{price}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Expenseitems;

import './Expenseitems.scss';

function Expenseitems(props) {
  let food = 'food :';
  let price = 'price :';
  let description = 'description and ';
  {
    return (
      <div className="expense-item">
        <div>{food}</div>
        <div className="expense-item__description">
          <div>{props.food}</div>
        </div>
        <h1>
          <div>
            {' '}
            {description}
            {price}
          </div>
        </h1>
        <div className="expense-item__price">
          <div>
            {props.description}
            {props.price}
          </div>
        </div>
      </div>
    );
  }
}

export default Expenseitems;

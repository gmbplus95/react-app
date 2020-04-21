import React, {useState} from 'react';

function Test() {
  const [color, setColor] = useState('red');

  const changeColor = () =>{
    setColor('blue');
  }

  const [items, setItems] = useState([]);


  const initItems = () => {
    setItems([...items, {
      id : items.length + 1,
      value: 'USA'
    }])
  }


  return (
    <div>
      <h1>
        {color}
      </h1>
      <button onClick={changeColor}>
        Change color
      </button>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.value}
          </li>
        ))}
      </ul>

      <button onClick={initItems}>
        Init items
      </button>

      <h3>{JSON.stringify(items)}</h3>
    </div>
  );
}

export default Test;
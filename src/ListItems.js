import React, { useState, useEffect } from 'react';

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    setItems([...items, inputValue]);
    setInputValue('');
  };

  useEffect(() => {
    console.log('Компонент ListItems обновлен');
  }, [items]);
  //useEffect(() => {
  //  console.log('Компонент ListItems обновлен');
 // }, []); // Пустой массив зависимостей
  




  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button onClick={addItem}>Добавить элемент</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;

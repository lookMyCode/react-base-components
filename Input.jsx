import React, {useState} from 'react';

export default function Input({ 
  value = '',
  onChange = () => {},
  ...attrs
 }) {
  let [val, setVal] = useState(value);

  const handleInput = ({ target }) => {
    setVal(target.value);
    onChange();
  }

  return <input 
    value={val} 
    onChange={handleInput}
    {...attrs} 
  />
}
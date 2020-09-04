import React from 'react';

export default function Button({ children, disabled = false, onClick = () => {}, ...attrs }) {
  const Tag = attrs.href ? 'a' : 'button';
  const onClickAction = e => {
    if(disabled) 
      e.preventDefault();
    
    return onClick(e);
  }
  
  return <Tag 
    onClick={onClickAction}
    {...attrs}
  >
    {children}
  </Tag>
}
import React from 'react';

import Button from './Button';

export default function ListItem({ 
  children,
  tag: Tag = 'li',
  ...attrs
 }) {
  if(attrs.href) {
    Tag = Button;
  }
  
  return <Tag
    {...attrs}
  >
    {children}
  </Tag>
}
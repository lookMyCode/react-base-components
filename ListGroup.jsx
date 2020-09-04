import React from 'react';

export default function ListGroup({ 
  children,
  tag: Tag = 'ul', 
  ...attrs
 }) {

  return <Tag 
    {...attrs}
  >
    {children}
  </Tag>
}
import React from 'react';

export default function Img({
  src = 'http://via.placeholder.com/100x100', 
  alt = '',
  ...attrs
}) {

  return <img
    src={src} 
    alt={alt} 
    {...attrs} 
  />
}
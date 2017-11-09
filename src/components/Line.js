import React from 'react';

const Line = () => (
  <div
    style={{
      width: 3,
      color: '#ffffff',
      height: 80,
      margin: 'auto',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: '#ffffff',
        top: '30%'
      }}
    />
  </div>
);

export default Line;

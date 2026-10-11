import React from 'react';

export default function DoubleBezelCard({ children, className = '', style = {}, onClick }) {
  return (
    <div 
      className={`double-bezel-outer ${className}`} 
      style={style}
      onClick={onClick}
    >
      <div className="double-bezel-inner">
        {children}
      </div>
    </div>
  );
}

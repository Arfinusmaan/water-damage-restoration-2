import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Button({
  to,
  href,
  variant = 'primary', // 'primary' | 'emergency' | 'secondary'
  children,
  icon: Icon = ArrowUpRight,
  onClick,
  className = '',
  type = 'button'
}) {
  const btnClass = variant === 'emergency' 
    ? 'btn-emergency' 
    : variant === 'secondary' 
    ? 'btn-secondary' 
    : 'btn-primary';

  const content = (
    <>
      <span>{children}</span>
      {Icon && (
        <span className="btn-icon-nested">
          <Icon size={15} />
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${btnClass} ${className}`} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${btnClass} ${className}`} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={`${btnClass} ${className}`} onClick={onClick}>
      {content}
    </button>
  );
}

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;      
  onClick?: () => void;     
  variant?: 'primary' | 'outline'; 
  className?: string;             
  href?: string;             
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  href 
}) => {

  const baseStyles = "px-8 py-3 rounded-full font-medium transition-all duration-300 inline-block text-center";
  

  const variants = {
    primary: "bg-black text-white hover:bg-zinc-800",
    outline: "border border-zinc-200 text-zinc-900 hover:border-black"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};
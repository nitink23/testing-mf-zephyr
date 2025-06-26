import React from 'react';

export interface RemoteCardProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
}

const RemoteCard: React.FC<RemoteCardProps> = ({
  title,
  subtitle,
  children,
  variant = 'default',
  className = '',
  headerClassName = '',
  bodyClassName = '',
}) => {
  const baseClasses = 'rounded-lg border';
  
  const variantClasses = {
    default: 'bg-white border-gray-200 shadow-sm',
    elevated: 'bg-white border-gray-200 shadow-lg',
    outlined: 'bg-transparent border-gray-300',
  };
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return (
    <div className={combinedClasses}>
      {(title || subtitle) && (
        <div className={`px-6 py-4 border-b border-gray-200 ${headerClassName}`}>
          {title && (
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
          )}
        </div>
      )}
      <div className={`px-6 py-4 ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default RemoteCard; 
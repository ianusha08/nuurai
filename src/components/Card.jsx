import React from 'react';

export default function Card({ 
  children, 
  title, 
  subtitle, 
  action, 
  badge, 
  interactive = false, 
  onClick, 
  className = '',
  style = {}
}) {
  return (
    <div 
      className={`nuurai-card ${interactive ? 'nuurai-card-interactive' : ''} ${className}`}
      onClick={onClick}
      style={style}
    >
      {(title || subtitle || action || badge) && (
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: children ? '1.2rem' : 0,
          gap: '1rem'
        }}>
          <div>
            {badge && <div style={{ marginBottom: '0.4rem' }}>{badge}</div>}
            {title && (
              <h3 style={{ 
                fontSize: '1.05rem', 
                fontWeight: 600, 
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em'
              }}>
                {title}
              </h3>
            )}
            {subtitle && (
              <p style={{ 
                fontSize: '0.85rem', 
                color: 'var(--text-secondary)', 
                marginTop: '0.15rem' 
              }}>
                {subtitle}
              </p>
            )}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </div>
  );
}

import React from 'react';

export default function SliderControl({ 
  label, 
  value, 
  onChange, 
  min = 1, 
  max = 10, 
  lowLabel = "Low", 
  highLabel = "High",
  accentColor = "var(--sage-primary)"
}) {
  return (
    <div style={{
      backgroundColor: 'var(--bg-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '1.25rem 1.5rem'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '0.85rem'
      }}>
        <label style={{ 
          fontSize: '0.95rem', 
          fontWeight: 600, 
          color: 'var(--text-primary)' 
        }}>
          {label}
        </label>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          backgroundColor: 'var(--bg-card-subtle)',
          padding: '0.2rem 0.6rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)'
        }}>
          <span style={{ 
            fontSize: '1.1rem', 
            fontWeight: 700, 
            color: accentColor 
          }}>
            {value}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            / {max}
          </span>
        </div>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          width: '100%',
          height: '6px',
          borderRadius: '3px',
          appearance: 'none',
          backgroundColor: 'var(--bg-card-subtle)',
          outline: 'none',
          cursor: 'pointer',
          accentColor: accentColor
        }}
      />

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '0.5rem',
        fontSize: '0.78rem',
        color: 'var(--text-secondary)'
      }}>
        <span>{lowLabel}</span>
        <span>{highLabel}</span>
      </div>
    </div>
  );
}

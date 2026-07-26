import React from 'react';
import { Leaf, User } from 'lucide-react';

export default function ChatMessage({ message, isUser = false, timestamp }) {
  // Format basic bold markdown in text
  const formatText = (text) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div style={{
      display: 'flex',
      gap: '0.85rem',
      justifyContent: isUser ? 'flex-end' : 'flex-start',
      marginBottom: '1.25rem',
      maxWidth: '100%'
    }}>
      {!isUser && (
        <div style={{
          width: '34px',
          height: '34px',
          borderRadius: '50%',
          backgroundColor: 'var(--sage-light)',
          border: '1px solid var(--sage-border)',
          color: 'var(--sage-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          marginTop: '2px'
        }}>
          <Leaf size={16} />
        </div>
      )}

      <div style={{
        maxWidth: '82%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: isUser ? 'flex-end' : 'flex-start'
      }}>
        <div style={{
          padding: '0.95rem 1.25rem',
          borderRadius: isUser ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
          backgroundColor: isUser ? 'var(--sage-primary)' : 'var(--bg-card)',
          color: isUser ? '#FFFFFF' : 'var(--text-primary)',
          border: isUser ? 'none' : '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-sm)',
          fontSize: '0.935rem',
          lineHeight: 1.6,
          whiteSpace: 'pre-wrap'
        }}>
          {formatText(message)}
        </div>

        {timestamp && (
          <span style={{
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
            marginTop: '0.35rem',
            padding: '0 0.25rem'
          }}>
            {timestamp}
          </span>
        )}
      </div>

      {isUser && (
        <div style={{
          width: '34px',
          height: '34px',
          borderRadius: '50%',
          backgroundColor: 'var(--bg-card-subtle)',
          border: '1px solid var(--border-subtle)',
          color: 'var(--text-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          marginTop: '2px'
        }}>
          <User size={16} />
        </div>
      )}
    </div>
  );
}

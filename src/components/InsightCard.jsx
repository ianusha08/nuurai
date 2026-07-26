import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function InsightCard({ insight, onClick }) {
  if (!insight) return null;

  return (
    <div style={{
      backgroundColor: 'var(--sage-light)',
      border: '1px solid var(--sage-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '1.35rem 1.5rem',
      position: 'relative'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '0.75rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: 'var(--sage-primary)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Sparkles size={13} />
          </div>
          <span style={{
            fontSize: '0.78rem',
            fontWeight: 600,
            color: 'var(--sage-primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {insight.type || "Pattern Observation"}
          </span>
        </div>

        <span style={{
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          backgroundColor: 'rgba(255,255,255,0.7)',
          padding: '0.2rem 0.6rem',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--sage-border)'
        }}>
          {insight.dateRange || "Recent"}
        </span>
      </div>

      <h4 style={{
        fontSize: '1.05rem',
        fontWeight: 600,
        color: 'var(--text-primary)',
        marginBottom: '0.4rem',
        lineHeight: 1.35
      }}>
        "{insight.headline}"
      </h4>

      <p style={{
        fontSize: '0.875rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.5,
        marginBottom: '0.85rem'
      }}>
        {insight.description}
      </p>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '0.65rem',
        borderTop: '1px solid rgba(82, 115, 96, 0.15)',
        fontSize: '0.78rem',
        color: 'var(--sage-primary)',
        fontWeight: 500
      }}>
        <span>Note: Reflection pattern based on your logs</span>
        {onClick && (
          <button 
            onClick={onClick} 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              color: 'var(--sage-hover)',
              fontWeight: 600
            }}
          >
            Explore topic <ArrowUpRight size={13} />
          </button>
        )}
      </div>
    </div>
  );
}

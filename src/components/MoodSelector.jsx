import React from 'react';
import { Sun, Smile, Meh, Cloud, CloudRain } from 'lucide-react';
import { moodOptions } from '../data/mockData';

const iconMap = {
  Sun: Sun,
  Smile: Smile,
  Meh: Meh,
  Cloud: Cloud,
  CloudRain: CloudRain
};

export default function MoodSelector({ selectedMood, onSelectMood }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: '0.85rem',
      width: '100%'
    }}>
      {moodOptions.map((mood) => {
        const IconComponent = iconMap[mood.icon] || Smile;
        const isSelected = selectedMood === mood.id;

        return (
          <button
            key={mood.id}
            type="button"
            onClick={() => onSelectMood(mood.id)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.25rem 0.85rem',
              borderRadius: 'var(--radius-lg)',
              border: isSelected 
                ? `2px solid ${mood.color}` 
                : '1px solid var(--border-subtle)',
              backgroundColor: isSelected ? mood.bg : 'var(--bg-card)',
              boxShadow: isSelected ? 'var(--shadow-md)' : 'var(--shadow-sm)',
              transition: 'all var(--transition-fast)',
              textAlign: 'center',
              cursor: 'pointer'
            }}
          >
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: isSelected ? '#FFFFFF' : 'var(--bg-card-subtle)',
              border: `1px solid ${isSelected ? mood.border : 'var(--border-subtle)'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: mood.color,
              marginBottom: '0.75rem',
              transition: 'transform var(--transition-fast)'
            }}>
              <IconComponent size={22} strokeWidth={1.8} />
            </div>
            
            <span style={{
              fontSize: '0.95rem',
              fontWeight: isSelected ? 600 : 500,
              color: 'var(--text-primary)',
              marginBottom: '0.2rem'
            }}>
              {mood.label}
            </span>

            <span style={{
              fontSize: '0.75rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.3
            }}>
              {mood.description}
            </span>
          </button>
        );
      })}
    </div>
  );
}

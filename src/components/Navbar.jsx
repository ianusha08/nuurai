import React from 'react';
import { Leaf, ArrowRight, Compass, LayoutDashboard, BarChart2, MessageSquare, Sparkles } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  return (
    <header style={{
      borderBottom: '1px solid var(--border-subtle)',
      backgroundColor: 'rgba(250, 248, 245, 0.95)',
      backdropFilter: 'blur(8px)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="nuurai-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => setActivePage('landing')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            backgroundColor: 'var(--sage-light)',
            border: '1px solid var(--sage-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--sage-primary)'
          }}>
            <Leaf size={18} strokeWidth={2} />
          </div>
          <div>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '1.2rem',
              letterSpacing: '0.08em',
              color: 'var(--text-primary)',
              textTransform: 'uppercase'
            }}>
              NUURAI
            </span>
          </div>
        </div>

        {/* Prototype View Navigation Tabs */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          backgroundColor: 'var(--bg-card-subtle)',
          padding: '0.3rem 0.4rem',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)'
        }}>
          <button 
            onClick={() => setActivePage('landing')}
            className={`btn btn-sm ${activePage === 'landing' ? 'btn-secondary' : 'btn-ghost'}`}
            style={{ fontWeight: activePage === 'landing' ? 600 : 400 }}
          >
            Home
          </button>
          
          <button 
            onClick={() => setActivePage('dashboard')}
            className={`btn btn-sm ${activePage === 'dashboard' ? 'btn-secondary' : 'btn-ghost'}`}
            style={{ fontWeight: activePage === 'dashboard' ? 600 : 400 }}
          >
            <LayoutDashboard size={15} />
            Dashboard
          </button>

          <button 
            onClick={() => setActivePage('insights')}
            className={`btn btn-sm ${activePage === 'insights' ? 'btn-secondary' : 'btn-ghost'}`}
            style={{ fontWeight: activePage === 'insights' ? 600 : 400 }}
          >
            <BarChart2 size={15} />
            Insights
          </button>

          <button 
            onClick={() => setActivePage('companion')}
            className={`btn btn-sm ${activePage === 'companion' ? 'btn-secondary' : 'btn-ghost'}`}
            style={{ fontWeight: activePage === 'companion' ? 600 : 400 }}
          >
            <MessageSquare size={15} />
            Companion
          </button>
        </nav>

        {/* Right CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button 
            onClick={() => setActivePage('checkin')}
            className="btn btn-primary"
            style={{ borderRadius: 'var(--radius-md)' }}
          >
            <Sparkles size={16} />
            <span>Start Check-in</span>
          </button>
        </div>
      </div>
    </header>
  );
}

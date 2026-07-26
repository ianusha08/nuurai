import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Heart, Moon, Sun, TrendingUp, CheckCircle2 } from 'lucide-react';
import Card from '../components/Card';
import MinimalChart from '../components/MinimalChart';
import { mockCheckIns } from '../data/mockData';

export default function LandingPage({ onStartCheckIn, onViewDashboard }) {
  return (
    <div style={{ paddingBottom: '5rem' }} className="animate-fade-in">
      {/* Hero Section */}
      <section style={{
        padding: '4.5rem 0 3.5rem',
        textAlign: 'center',
        maxWidth: '780px',
        margin: '0 auto'
      }}>
        {/* Subtle pill tag */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          backgroundColor: 'var(--sage-light)',
          color: 'var(--sage-primary)',
          border: '1px solid var(--sage-border)',
          borderRadius: 'var(--radius-full)',
          padding: '0.3rem 0.85rem',
          fontSize: '0.825rem',
          fontWeight: 500,
          marginBottom: '1.75rem'
        }}>
          <Sparkles size={14} />
          <span>A calm space for personal reflection & mental wellbeing</span>
        </div>

        {/* Main Headline */}
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
          fontWeight: 400,
          lineHeight: 1.15,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          marginBottom: '1.25rem'
        }}>
          Understand how you've really been doing.
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '1.125rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          marginBottom: '2.25rem',
          fontWeight: 400,
          maxWidth: '620px',
          margin: '0 auto 2.25rem'
        }}>
          NUURAI helps you notice subtle emotional patterns through simple daily check-ins, thoughtful journaling, and non-diagnostic reflection insights.
        </p>

        {/* Action CTAs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <button 
            onClick={onStartCheckIn}
            className="btn btn-primary"
            style={{
              padding: '0.85rem 1.8rem',
              fontSize: '1rem',
              borderRadius: 'var(--radius-md)'
            }}
          >
            <span>Start a check-in</span>
            <ArrowRight size={18} />
          </button>

          <button 
            onClick={onViewDashboard}
            className="btn btn-secondary"
            style={{
              padding: '0.85rem 1.6rem',
              fontSize: '1rem',
              borderRadius: 'var(--radius-md)'
            }}
          >
            <span>View how it works</span>
          </button>
        </div>
      </section>

      {/* Dashboard Preview Section (Live UI Card instead of generic stock image) */}
      <section style={{ maxWidth: '960px', margin: '0 auto 4rem' }}>
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden'
        }}>
          {/* Mock Window Bar */}
          <div style={{
            backgroundColor: 'var(--bg-card-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '0.75rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#E4CFBA' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#CBD9D0' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#D5D1C6' }} />
            </div>

            <div style={{
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.04em'
            }}>
              NUURAI Dashboard Preview
            </div>

            <div style={{
              fontSize: '0.75rem',
              color: 'var(--sage-primary)',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}>
              <CheckCircle2 size={13} />
              <span>Log Saved</span>
            </div>
          </div>

          {/* Interactive Preview Content */}
          <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {/* Left Card: Today's Summary */}
            <div style={{
              backgroundColor: 'var(--bg-warm)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>TODAY'S OVERVIEW</span>
                <span className="badge badge-sage">Content</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
                Good evening, Anusha
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.2rem' }}>
                You logged your check-in earlier today. Your energy is steady at 7/10.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                backgroundColor: 'var(--bg-card)',
                padding: '0.85rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Energy</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--sage-primary)' }}>7 / 10</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Stress</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#B37A5C' }}>3 / 10</div>
                </div>
              </div>
            </div>

            {/* Right Card: Weekly Graph Preview */}
            <div style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem'
            }}>
              <MinimalChart 
                data={mockCheckIns} 
                type="line" 
                dataKey="energyScore" 
                title="Weekly Energy Trajectory" 
                height={140}
              />
              <div style={{
                marginTop: '0.85rem',
                backgroundColor: 'var(--sage-light)',
                padding: '0.65rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.78rem',
                color: 'var(--sage-primary)',
                lineHeight: 1.4
              }}>
                <strong>Observation:</strong> Higher energy observed following 7.5+ hours of sleep.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple 3-Step Walkthrough */}
      <section style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '2rem',
          fontWeight: 400,
          marginBottom: '2.5rem',
          color: 'var(--text-primary)'
        }}>
          Designed for gentle consistency
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          textAlign: 'left'
        }}>
          <Card>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: 'var(--sage-light)',
              color: 'var(--sage-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '0.95rem',
              marginBottom: '1rem'
            }}>
              1
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.4rem' }}>Daily 2-min Check-in</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              Track how you feel, your sleep, and energy using simple step-by-step sliders and journal notes.
            </p>
          </Card>

          <Card>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: 'var(--peach-subtle)',
              color: '#8C5B3E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '0.95rem',
              marginBottom: '1rem'
            }}>
              2
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.4rem' }}>Notice Subtle Trends</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              Watch weekly and monthly curves that highlight sleep, stress, and mood correlations without clutter.
            </p>
          </Card>

          <Card>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: 'var(--bg-card-subtle)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '0.95rem',
              marginBottom: '1rem'
            }}>
              3
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.4rem' }}>Reflect with Companion</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              Unpack how your day went with a serene reflection assistant designed to listen and guide your thoughts.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}

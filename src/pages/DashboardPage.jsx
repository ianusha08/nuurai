import React from 'react';
import { Sparkles, Calendar, Zap, Activity, Moon, Sun, ArrowUpRight, Plus, Check } from 'lucide-react';
import Card from '../components/Card';
import MinimalChart from '../components/MinimalChart';
import InsightCard from '../components/InsightCard';

export default function DashboardPage({ userData, checkIns, insights, onStartCheckIn, onViewInsights, onViewCompanion }) {
  const latestCheckIn = checkIns[0] || {};
  const isTodayLogged = userData.todayCompleted || latestCheckIn.date === '2026-07-26';

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      {/* Top Header & Greeting */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: '2rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            marginBottom: '0.35rem'
          }}>
            <Calendar size={14} />
            <span>Sunday, July 26 • {userData.streakDays} Day Streak</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.4rem',
            fontWeight: 400,
            color: 'var(--text-primary)',
            lineHeight: 1.15
          }}>
            Good evening, {userData.name}
          </h1>
        </div>

        {/* Action Button */}
        <div>
          {!isTodayLogged ? (
            <button 
              onClick={onStartCheckIn}
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.4rem' }}
            >
              <Plus size={16} />
              <span>Log Today's Check-in</span>
            </button>
          ) : (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'var(--sage-light)',
              color: 'var(--sage-primary)',
              border: '1px solid var(--sage-border)',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.875rem',
              fontWeight: 500
            }}>
              <Check size={16} />
              <span>Today's check-in complete</span>
            </div>
          )}
        </div>
      </div>

      {/* 4 Summary Stat Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        {/* Card 1: Today's Status */}
        <Card>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.5rem' }}>
            TODAY'S STATUS
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.2rem' }}>
            <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--sage-primary)' }}>
              {latestCheckIn.moodLabel || "Content"}
            </span>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Logged at 8:30 AM • Stable calm
          </p>
        </Card>

        {/* Card 2: Average Energy */}
        <Card>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.5rem' }}>
            WEEKLY ENERGY
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
            <Zap size={20} color="var(--sage-primary)" />
            <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              6.8 <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 400 }}>/ 10</span>
            </span>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Moderate & steady energy
          </p>
        </Card>

        {/* Card 3: Average Stress */}
        <Card>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.5rem' }}>
            STRESS TREND
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
            <Activity size={20} color="#B37A5C" />
            <span style={{ fontSize: '1.4rem', fontWeight: 700, color: '#B37A5C' }}>
              4.2 <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 400 }}>/ 10</span>
            </span>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Down 15% from last week
          </p>
        </Card>

        {/* Card 4: Sleep Duration */}
        <Card>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.5rem' }}>
            SLEEP AVG
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
            <Moon size={20} color="var(--sage-primary)" />
            <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              7.1 <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 400 }}>hrs</span>
            </span>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Mostly Restful quality
          </p>
        </Card>
      </div>

      {/* Main Content Grid: Charts + Insight Card */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2.5rem'
      }}>
        {/* Left Column: Weekly Energy & Stress Chart */}
        <Card 
          title="Weekly Energy & Stress Curves" 
          subtitle="Comparing your physical energy vs perceived daily stress"
        >
          <MinimalChart 
            data={checkIns} 
            type="line" 
            dataKey="energyScore" 
            title="Energy Curve" 
            height={160}
            strokeColor="var(--sage-primary)"
          />
        </Card>

        {/* Right Column: Key Reflection Insight */}
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
            Weekly Pattern Observation
          </h3>
          <InsightCard 
            insight={insights[0]} 
            onClick={onViewInsights}
          />

          {/* Quick Companion Box */}
          <div style={{
            marginTop: '1.25rem',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                NUURAI Companion
              </span>
              <span className="badge badge-neutral">Assistant</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.85rem' }}>
              "Would you like to reflect on how your mid-week stress normalized after Friday?"
            </p>
            <button 
              onClick={onViewCompanion}
              className="btn btn-secondary btn-sm"
              style={{ width: '100%' }}
            >
              <span>Reflect with NUURAI</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Timeline Section: Recent Check-ins */}
      <section>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem'
        }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            Recent Check-ins
          </h3>
          <button 
            onClick={onViewInsights}
            className="btn btn-ghost btn-sm"
          >
            <span>View all in Insights</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {checkIns.slice(0, 5).map((log) => (
            <div key={log.id} style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1.1rem 1.35rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              {/* Date & Mood */}
              <div style={{ minWidth: '140px' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {log.displayDate} ({log.date})
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {log.moodLabel}
                </div>
              </div>

              {/* Stats pills */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <div style={{
                  fontSize: '0.78rem',
                  backgroundColor: 'var(--sage-light)',
                  color: 'var(--sage-primary)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 500
                }}>
                  Energy: {log.energyScore}/10
                </div>
                <div style={{
                  fontSize: '0.78rem',
                  backgroundColor: 'var(--peach-subtle)',
                  color: '#8C5B3E',
                  padding: '0.25rem 0.6rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 500
                }}>
                  Stress: {log.stressScore}/10
                </div>
                <div style={{
                  fontSize: '0.78rem',
                  backgroundColor: 'var(--bg-card-subtle)',
                  color: 'var(--text-secondary)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: 'var(--radius-full)'
                }}>
                  Sleep: {log.sleepHours}h ({log.sleepQuality})
                </div>
              </div>

              {/* Reflection note snippet */}
              <div style={{
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                fontStyle: 'italic',
                maxWidth: '300px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                "{log.note}"
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

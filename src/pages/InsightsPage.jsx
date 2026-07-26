import React from 'react';
import { BarChart2, TrendingUp, Zap, Moon, Activity, Sparkles, Tag, Layers } from 'lucide-react';
import Card from '../components/Card';
import MinimalChart from '../components/MinimalChart';
import InsightCard from '../components/InsightCard';

export default function InsightsPage({ checkIns, insights }) {
  // Compute summary stats from mock check-ins
  const avgEnergy = (checkIns.reduce((acc, c) => acc + c.energyScore, 0) / checkIns.length).toFixed(1);
  const avgStress = (checkIns.reduce((acc, c) => acc + c.stressScore, 0) / checkIns.length).toFixed(1);
  const avgSleep = (checkIns.reduce((acc, c) => acc + c.sleepHours, 0) / checkIns.length).toFixed(1);

  // Extract all unique themes
  const allThemes = Array.from(new Set(checkIns.flatMap(c => c.themes || [])));

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      {/* Top Title Banner */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          backgroundColor: 'var(--sage-light)',
          color: 'var(--sage-primary)',
          borderRadius: 'var(--radius-full)',
          padding: '0.25rem 0.75rem',
          fontSize: '0.78rem',
          fontWeight: 600,
          marginBottom: '0.5rem'
        }}>
          <Sparkles size={13} />
          <span>LONG-TERM PATTERNS & REFLECTION</span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '2.5rem',
          fontWeight: 400,
          color: 'var(--text-primary)',
          marginBottom: '0.5rem'
        }}>
          Personal Insights
        </h1>

        <p style={{
          fontSize: '0.975rem',
          color: 'var(--text-secondary)',
          maxWidth: '650px',
          lineHeight: 1.6
        }}>
          As you log regular check-ins, NUURAI surfaces non-diagnostic relationships between your rest, stress, energy levels, and daily habits.
        </p>
      </div>

      {/* 3 Short Key Observations */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{
          fontSize: '1.1rem',
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: '1rem'
        }}>
          Key Observations (Past 14 Days)
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.25rem'
        }}>
          {insights.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      </div>

      {/* Analytics & Graphs Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2.5rem'
      }}>
        {/* Graph 1: Mood & Energy Curve */}
        <Card 
          title="Mood & Energy Trajectory" 
          subtitle={`Average Energy: ${avgEnergy} / 10 across logged days`}
        >
          <MinimalChart 
            data={checkIns} 
            type="line" 
            dataKey="energyScore" 
            title="Energy Curve" 
            height={180}
            strokeColor="var(--sage-primary)"
          />
        </Card>

        {/* Graph 2: Stress Trend Bar Chart */}
        <Card 
          title="Daily Stress Distribution" 
          subtitle={`Average Stress: ${avgStress} / 10 across logged days`}
        >
          <MinimalChart 
            data={checkIns} 
            type="bar" 
            dataKey="stressScore" 
            title="Stress Levels per day" 
            height={180}
            strokeColor="#B37A5C"
          />
        </Card>
      </div>

      {/* Sleep Pattern & Recurring Themes Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem'
      }}>
        {/* Sleep Pattern Breakdown */}
        <Card title="Sleep Duration Pattern" subtitle={`Average: ${avgSleep} hours per night`}>
          <MinimalChart 
            data={checkIns} 
            type="bar" 
            dataKey="sleepHours" 
            title="Hours logged" 
            height={150}
            strokeColor="var(--sage-primary)"
          />
          <div style={{
            marginTop: '1rem',
            paddingTop: '0.85rem',
            borderTop: '1px solid var(--border-subtle)',
            fontSize: '0.825rem',
            color: 'var(--text-secondary)',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <span>Restful nights: <strong>72%</strong></span>
            <span>Restless nights: <strong>28%</strong></span>
          </div>
        </Card>

        {/* Recurring Reflection Themes */}
        <Card title="Recurring Themes & Activities" subtitle="Topics frequently tagged in your daily journal notes">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginTop: '0.5rem',
            marginBottom: '1rem'
          }}>
            {allThemes.map((theme, i) => (
              <div key={i} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.4rem 0.85rem',
                backgroundColor: 'var(--bg-warm)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                color: 'var(--text-primary)'
              }}>
                <Tag size={13} color="var(--sage-primary)" />
                <span>{theme}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
            * Themes are automatically highlighted when mentioned in your private check-in notes to help you connect actions with emotional wellbeing.
          </p>
        </Card>
      </div>
    </div>
  );
}

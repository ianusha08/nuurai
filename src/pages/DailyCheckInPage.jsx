import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Sparkles, Moon, Sun, Heart, Edit3 } from 'lucide-react';
import MoodSelector from '../components/MoodSelector';
import SliderControl from '../components/SliderControl';
import { moodOptions } from '../data/mockData';

export default function DailyCheckInPage({ onCompleteCheckIn, onViewDashboard }) {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  // Form State
  const [selectedMood, setSelectedMood] = useState('content');
  const [energyScore, setEnergyScore] = useState(7);
  const [stressScore, setStressScore] = useState(3);
  const [sleepHours, setSleepHours] = useState(7.5);
  const [sleepQuality, setSleepQuality] = useState('Good');
  const [journalNote, setJournalNote] = useState('');
  const [selectedThemes, setSelectedThemes] = useState(['Outdoor walk']);
  const [isFinished, setIsFinished] = useState(false);

  const availableThemes = [
    'Outdoor walk', 'Restful sleep', 'Deep work', 'Screen break', 
    'Family time', 'Caffeine', 'Late night', 'Exercise', 'Reading'
  ];

  const toggleTheme = (theme) => {
    if (selectedThemes.includes(theme)) {
      setSelectedThemes(selectedThemes.filter(t => t !== theme));
    } else {
      setSelectedThemes([...selectedThemes, theme]);
    }
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Complete check-in
      const newEntry = {
        id: `chk-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        displayDate: 'Today',
        dayLabel: 'Today',
        moodId: selectedMood,
        moodLabel: moodOptions.find(m => m.id === selectedMood)?.label || 'Content',
        energyScore,
        stressScore,
        sleepHours,
        sleepQuality,
        note: journalNote || 'Logged daily check-in.',
        themes: selectedThemes
      };
      
      onCompleteCheckIn(newEntry);
      setIsFinished(true);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  if (isFinished) {
    return (
      <div className="animate-fade-in" style={{
        maxWidth: '580px',
        margin: '3rem auto',
        textAlign: 'center',
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '3rem 2rem',
        boxShadow: 'var(--shadow-md)'
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: 'var(--sage-light)',
          border: '1px solid var(--sage-border)',
          color: 'var(--sage-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem'
        }}>
          <CheckCircle size={28} />
        </div>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '2.2rem',
          fontWeight: 400,
          color: 'var(--text-primary)',
          marginBottom: '0.75rem'
        }}>
          Check-in Complete
        </h2>

        <p style={{
          fontSize: '0.975rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          marginBottom: '2rem',
          maxWidth: '440px',
          margin: '0 auto 2rem'
        }}>
          Thank you for taking a moment for yourself today. Your check-in has been logged and your wellness patterns have been updated.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button 
            onClick={onViewDashboard} 
            className="btn btn-primary"
            style={{ padding: '0.75rem 1.6rem' }}
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ maxWidth: '680px', margin: '2rem auto 4rem' }}>
      {/* Header & Progress */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.75rem'
        }}>
          <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            DAILY REFLECTION
          </span>
          <span style={{ fontSize: '0.825rem', color: 'var(--sage-primary)', fontWeight: 600 }}>
            Step {step} of {totalSteps}
          </span>
        </div>

        {/* Progress Bar */}
        <div style={{
          height: '4px',
          width: '100%',
          backgroundColor: 'var(--border-subtle)',
          borderRadius: '2px',
          overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            width: `${(step / totalSteps) * 100}%`,
            backgroundColor: 'var(--sage-primary)',
            transition: 'width var(--transition-normal)'
          }} />
        </div>
      </div>

      {/* Step Container Card */}
      <div style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '2.25rem 2rem',
        boxShadow: 'var(--shadow-sm)'
      }}>
        {/* Step 1: Mood */}
        {step === 1 && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                fontWeight: 400,
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }}>
                How are you feeling today?
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Select the emotion that best reflects your general state right now.
              </p>
            </div>

            <MoodSelector 
              selectedMood={selectedMood} 
              onSelectMood={setSelectedMood} 
            />
          </div>
        )}

        {/* Step 2: Energy & Stress */}
        {step === 2 && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                fontWeight: 400,
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }}>
                Energy & Stress
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Rate how your mind and body feel physically and mentally today.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <SliderControl 
                label="Energy Level"
                value={energyScore}
                onChange={setEnergyScore}
                lowLabel="Drained / Slow"
                highLabel="Vibrant / Focused"
                accentColor="var(--sage-primary)"
              />

              <SliderControl 
                label="Stress Level"
                value={stressScore}
                onChange={setStressScore}
                lowLabel="Calm / Relaxed"
                highLabel="High Pressure"
                accentColor="#B37A5C"
              />
            </div>
          </div>
        )}

        {/* Step 3: Sleep */}
        {step === 3 && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                fontWeight: 400,
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }}>
                How was your sleep?
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Rest plays a quiet role in how we perceive stress and energy.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Hours Slider */}
              <SliderControl 
                label="Duration (Hours)"
                value={sleepHours}
                onChange={setSleepHours}
                min={3}
                max={12}
                lowLabel="Short sleep"
                highLabel="Deep rest"
                accentColor="var(--sage-primary)"
              />

              {/* Quality selector */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Sleep Quality
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.65rem' }}>
                  {['Restful', 'Good', 'Fair', 'Restless'].map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setSleepQuality(q)}
                      style={{
                        padding: '0.75rem 0.5rem',
                        borderRadius: 'var(--radius-md)',
                        border: sleepQuality === q ? '2px solid var(--sage-primary)' : '1px solid var(--border-subtle)',
                        backgroundColor: sleepQuality === q ? 'var(--sage-light)' : 'var(--bg-card)',
                        color: sleepQuality === q ? 'var(--sage-primary)' : 'var(--text-primary)',
                        fontWeight: sleepQuality === q ? 600 : 400,
                        fontSize: '0.875rem'
                      }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Reflection Journal */}
        {step === 4 && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                fontWeight: 400,
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }}>
                What's been on your mind?
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Write a few sentences to capture your thoughts. This is private to you.
              </p>
            </div>

            {/* Prompt suggestions */}
            <div style={{
              display: 'flex',
              gap: '0.4rem',
              flexWrap: 'wrap',
              marginBottom: '1rem'
            }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', alignSelf: 'center' }}>Prompts:</span>
              {[
                "What went well today?",
                "What felt draining?",
                "What am I grateful for?"
              ].map((p, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setJournalNote(prev => prev ? `${prev} ${p}` : p)}
                  style={{
                    fontSize: '0.75rem',
                    backgroundColor: 'var(--bg-card-subtle)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: 'var(--radius-full)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  + {p}
                </button>
              ))}
            </div>

            <textarea
              rows={4}
              value={journalNote}
              onChange={(e) => setJournalNote(e.target.value)}
              placeholder="Write your reflection here..."
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-warm)',
                fontSize: '0.935rem',
                color: 'var(--text-primary)',
                lineHeight: 1.6,
                outline: 'none',
                resize: 'vertical',
                marginBottom: '1.25rem'
              }}
            />

            {/* Themes / Tags */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: '0.65rem'
              }}>
                Associated Themes
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {availableThemes.map(t => {
                  const isSel = selectedThemes.includes(t);
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => toggleTheme(t)}
                      style={{
                        padding: '0.3rem 0.7rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.78rem',
                        border: isSel ? '1px solid var(--sage-border)' : '1px solid var(--border-subtle)',
                        backgroundColor: isSel ? 'var(--sage-light)' : 'var(--bg-card)',
                        color: isSel ? 'var(--sage-primary)' : 'var(--text-secondary)',
                        fontWeight: isSel ? 600 : 400
                      }}
                    >
                      {isSel ? '✓ ' : ''}{t}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Step Navigation Controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '2.5rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid var(--border-subtle)'
        }}>
          {step > 1 ? (
            <button 
              type="button" 
              onClick={handleBack} 
              className="btn btn-secondary"
              style={{ padding: '0.65rem 1.25rem' }}
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
          ) : <div />}

          <button 
            type="button" 
            onClick={handleNext} 
            className="btn btn-primary"
            style={{ padding: '0.65rem 1.5rem' }}
          >
            <span>{step === totalSteps ? 'Complete check-in' : 'Continue'}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

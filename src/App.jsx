import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import DailyCheckInPage from './pages/DailyCheckInPage';
import DashboardPage from './pages/DashboardPage';
import InsightsPage from './pages/InsightsPage';
import CompanionPage from './pages/CompanionPage';
import { initialUserData, mockCheckIns, mockInsights } from './data/mockData';

export default function App() {
  const [activePage, setActivePage] = useState('landing');
  const [userData, setUserData] = useState(initialUserData);
  const [checkIns, setCheckIns] = useState(mockCheckIns);
  const [insights, setInsights] = useState(mockInsights);

  const handleCompleteCheckIn = (newEntry) => {
    setCheckIns([newEntry, ...checkIns]);
    setUserData(prev => ({
      ...prev,
      todayCompleted: true,
      streakDays: prev.streakDays + 1
    }));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-warm)' }}>
      {/* Top Navbar Header */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Page Area */}
      <main className="nuurai-container" style={{ flex: 1, paddingTop: '2rem' }}>
        {activePage === 'landing' && (
          <LandingPage 
            onStartCheckIn={() => setActivePage('checkin')} 
            onViewDashboard={() => setActivePage('dashboard')}
          />
        )}

        {activePage === 'checkin' && (
          <DailyCheckInPage 
            onCompleteCheckIn={handleCompleteCheckIn}
            onViewDashboard={() => setActivePage('dashboard')}
          />
        )}

        {activePage === 'dashboard' && (
          <DashboardPage 
            userData={userData}
            checkIns={checkIns}
            insights={insights}
            onStartCheckIn={() => setActivePage('checkin')}
            onViewInsights={() => setActivePage('insights')}
            onViewCompanion={() => setActivePage('companion')}
          />
        )}

        {activePage === 'insights' && (
          <InsightsPage 
            checkIns={checkIns}
            insights={insights}
          />
        )}

        {activePage === 'companion' && (
          <CompanionPage />
        )}
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--border-subtle)',
        backgroundColor: 'var(--bg-card-subtle)',
        padding: '2rem 0',
        marginTop: 'auto'
      }}>
        <div className="nuurai-container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.825rem',
          color: 'var(--text-secondary)'
        }}>
          <div>
            <strong>NUURAI</strong> — Warm Minimal Mental Wellness Prototype
          </div>

          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => setActivePage('landing')}>Home</span>
            <span style={{ cursor: 'pointer' }} onClick={() => setActivePage('checkin')}>Check-in</span>
            <span style={{ cursor: 'pointer' }} onClick={() => setActivePage('dashboard')}>Dashboard</span>
            <span style={{ cursor: 'pointer' }} onClick={() => setActivePage('insights')}>Insights</span>
            <span style={{ cursor: 'pointer' }} onClick={() => setActivePage('companion')}>Companion</span>
          </div>

          <div>
            © 2026 NUURAI. Non-clinical reflection platform.
          </div>
        </div>
      </footer>
    </div>
  );
}

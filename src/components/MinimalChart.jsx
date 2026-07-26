import React from 'react';

export default function MinimalChart({ data = [], type = 'line', dataKey = 'energyScore', title, height = 180, strokeColor = "#527360", fillColor = "rgba(82, 115, 96, 0.08)" }) {
  if (!data || data.length === 0) return null;

  // Prepare normalized points
  const reverseData = [...data].reverse(); // oldest to newest
  const values = reverseData.map(d => d[dataKey] || 0);
  const maxVal = Math.max(...values, 10);
  const minVal = 0;

  const padding = 24;
  const width = 450;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const points = reverseData.map((d, index) => {
    const x = padding + (index / (reverseData.length - 1)) * chartWidth;
    const val = d[dataKey] || 0;
    const y = height - padding - ((val - minVal) / (maxVal - minVal)) * chartHeight;
    return { x, y, val, label: d.dayLabel || d.displayDate };
  });

  const pathD = points.length > 0 
    ? points.reduce((acc, point, index) => `${acc} ${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`, '')
    : '';

  const areaD = points.length > 0
    ? `${pathD} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`
    : '';

  return (
    <div style={{ width: '100%' }}>
      {title && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.75rem'
        }}>
          <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            {title}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Past {data.length} days
          </span>
        </div>
      )}

      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <svg 
          viewBox={`0 0 ${width} ${height}`} 
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          {/* Horizontal grid lines */}
          <line x1={padding} y1={padding} x2={width - padding} y2={padding} stroke="var(--border-subtle)" strokeDasharray="3 3" strokeWidth="1" />
          <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} stroke="var(--border-subtle)" strokeDasharray="3 3" strokeWidth="1" />
          <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="var(--border-strong)" strokeWidth="1" />

          {type === 'line' ? (
            <>
              {/* Area Under Curve */}
              <path d={areaD} fill={fillColor} />

              {/* Line path */}
              <path 
                d={pathD} 
                fill="none" 
                stroke={strokeColor} 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />

              {/* Data points */}
              {points.map((pt, i) => (
                <g key={i}>
                  <circle 
                    cx={pt.x} 
                    cy={pt.y} 
                    r="4" 
                    fill="var(--bg-card)" 
                    stroke={strokeColor} 
                    strokeWidth="2" 
                  />
                  {/* Label */}
                  <text 
                    x={pt.x} 
                    y={height - 6} 
                    textAnchor="middle" 
                    fontSize="10" 
                    fill="var(--text-muted)"
                    fontFamily="var(--font-sans)"
                  >
                    {pt.label}
                  </text>
                </g>
              ))}
            </>
          ) : (
            /* Bar Chart */
            points.map((pt, i) => {
              const barWidth = Math.max(12, chartWidth / points.length - 16);
              const barHeight = (height - padding) - pt.y;
              return (
                <g key={i}>
                  <rect
                    x={pt.x - barWidth / 2}
                    y={pt.y}
                    width={barWidth}
                    height={barHeight}
                    rx="4"
                    fill={strokeColor}
                    opacity={0.85}
                  />
                  <text 
                    x={pt.x} 
                    y={height - 6} 
                    textAnchor="middle" 
                    fontSize="10" 
                    fill="var(--text-muted)"
                    fontFamily="var(--font-sans)"
                  >
                    {pt.label}
                  </text>
                </g>
              );
            })
          )}
        </svg>
      </div>
    </div>
  );
}

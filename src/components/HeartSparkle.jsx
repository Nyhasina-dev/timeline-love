import React from 'react'

export default function HeartSparkle({ className = '' }) {
  return (
    <div className={`heart-sparkle ${className}`} aria-hidden="true">
      <div className="heart">❤</div>
      <div className="sparkles">
        <span>✦</span>
        <span>✦</span>
        <span>✦</span>
      </div>
    </div>
  )
}

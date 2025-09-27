import React from 'react'
import TimelineItem from './TimelineItem'

export default function Timeline({ items }) {
  return (
    <section className="timeline">
      <div className="timeline-line" />
      <div className="timeline-items">
        {items.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

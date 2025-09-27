import React, { useState } from 'react'
import HeartSparkle from './HeartSparkle'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

export default function TimelineItem({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`timeline-item ${open ? 'open' : ''}`}>
      <div
        className="item-marker"
        onClick={() => setOpen(!open)}
        role="button"
        tabIndex={0}
      >
        <div className="marker-inner">
          {open ? <FiChevronUp /> : <FiChevronDown />}
        </div>
      </div>

      <div className="item-content">
        <div className="item-header">
          <h3>{item.title}</h3>
          <time>{item.date}</time>
        </div>

        <div className="item-preview" onClick={() => setOpen(true)}>
          {Array.isArray(item.img) ? (
            <div className="item-gallery">
              {item.img.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`${item.title} ${idx + 1}`}
                  style={{
                    width: '120px',
                    marginRight: '8px',
                    borderRadius: '8px',
                  }}
                />
              ))}
            </div>
          ) : (
            <img src={item.img} alt={item.title} />
          )}
        </div>

        <div className="item-body" style={{ display: open ? 'block' : 'none' }}>
          <p>{item.text}</p>
          <HeartSparkle />
        </div>
      </div>
    </div>
  )
}

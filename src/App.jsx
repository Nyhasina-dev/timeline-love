import React, { useRef, useState } from 'react'
import Timeline from './components/Timeline'
import timelineData from './data'

export default function App() {
  const audioRef = useRef(null)
  const [journeyStarted, setJourneyStarted] = useState(false)

  const handleStart = (e) => {
    e.preventDefault()
    setJourneyStarted(true)

    // petit délai pour laisser le header remonter avant de scroller
    setTimeout(() => {
      document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' })
    }, 800)
  }

  return (
    <div className="app">
      <header className={`hero ${journeyStarted ? 'hero-top' : 'hero-center'}`}>
        <div className="hero-inner">
          <h1>Two incredible Years - Our Story</h1>
          <p className="subtitle">
            A journey of images, words, and music crafted just for you, with all
            the love in my heart. I want to take you back through every
            treasured moment of these two incredible years, to feel our
            laughter, our embraces, and every whispered secret as if we were
            living them all over again. Being part of your life fills me with
            endless pride, and loving you consumes me with a joy deeper than
            words can ever express.
          </p>
          <button className="start-btn" onClick={handleStart}>
            Start the Journey of Us ✨
          </button>
        </div>
      </header>

      {journeyStarted && (
        <main id="timeline" className="main fade-in">
          <Timeline items={timelineData} />
          <section className="finale">
            <h2>Final Surprise</h2>
            <p>
              Today, I want to give you something that words alone could never
              capture. I’ve written a song just for you. A song that carries my
              heart in every note, my soul in every lyric. It’s my way of
              showing you how deeply you mean to me, how proud I am to love you,
              and how devoted I am to you for the rest of my life.🎶
            </p>
            <audio ref={audioRef} controls src="/images/As_You_Are.mp3" />
            <p
              style={{
                marginTop: '12px',
                fontStyle: 'italic',
                color: '#d83e6b',
              }}
            >
              Listen and let your heart smile 💖
            </p>
          </section>
        </main>
      )}

      {journeyStarted && (
        <footer className="footer fade-in">
          <small>
            From the first smile to every tomorrow — I love you more every day
            ❤️
          </small>
        </footer>
      )}
    </div>
  )
}

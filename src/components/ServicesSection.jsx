import { useRef, useEffect } from 'react'
import './ServicesSection.css'
import { handleScrollClick } from '../utils/scroll'
import DigitalMarketingImg from '../assets/DigitalMarkiting.png'
import WebDevelopmentImg from '../assets/Webdevelopment.png'

/* ---------- Illustrations ---------- */

function MarketingArt() {
  return (
    <img 
      src={DigitalMarketingImg} 
      alt="Digital Marketing Growth Chart" 
      className="xsv-art xsv-art-img" 
      loading="lazy"
    />
  )
}

function WebAppArt() {
  return (
    <img 
      src={WebDevelopmentImg} 
      alt="Web Application Development" 
      className="xsv-art xsv-art-img" 
      loading="lazy"
    />
  )
}

/* ---------- Data ----------
   To use a real photo instead of the illustration, add  image: '/images/your-photo.jpg'
   (put the file in your /public/images folder) */

const SERVICES = [
  {
    art: <MarketingArt />,
    eyebrow: 'Growth',
    icon: 'M3 17l6-6 4 4 8-8M15 7h6v6',
    title: 'Digital marketing',
    text: 'Campaigns that put your business in front of people ready to buy.',
    items: ['SEO', 'Social media', 'Content', 'PPC ads', 'Email'],
  },
  {
    art: <WebAppArt />,
    eyebrow: 'Engineering',
    icon: 'M4 5h16v11H4zM8 20h8M12 16v4',
    title: 'Web applications',
    text: 'Software shaped around how your business actually works.',
    items: ['Custom web apps', 'eCommerce', 'Progressive web apps', 'APIs', 'Cloud integration'],
  },
]

const STEPS = [
  { t: 'Discover', d: 'We dig into your goals, users and numbers.' },
  { t: 'Design', d: 'Clear plan and visuals before any build starts.' },
  { t: 'Build', d: 'Shipped in focused sprints you can review.' },
  { t: 'Grow', d: 'Measure, improve and scale what works.' },
]

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function ServiceRow({ art, image, eyebrow, icon, title, text, items, index }) {
  // Spotlight follows the cursor
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <article className={`xsv-row${index % 2 ? ' is-rev' : ''}`}>
      <div className="xsv-media">
        <span className="xsv-orb" aria-hidden="true" />
        <div className="xsv-frame" onMouseMove={onMove}>
          {image ? <img className="xsv-photo" src={image} alt={title} loading="lazy" /> : art}
        </div>
      </div>

      <div className="xsv-body">
        <div className="xsv-eyebrow">
          <span className="xsv-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d={icon} />
            </svg>
          </span>
          <span className="xsv-eyebrow-label">{eyebrow}</span>
          <span className="xsv-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        </div>

        <h3 className="xsv-title">{title}</h3>
        <p className="xsv-text">{text}</p>

        <ul className="xsv-chips">
          {items.map((item) => (
            <li key={item} className="xsv-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12l5 5 9-10" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')} className="xsv-btn xsv-btn-main">
          Talk to us about {title.toLowerCase()}
          <Arrow />
        </a>
      </div>
    </article>
  )
}

function ServicesSection() {
  const ref = useRef(null)

  // One reveal when the section scrolls into view
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in')
          io.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="services" className="xsv" ref={ref}>
      <div className="xsv-wrap">
        <header className="xsv-head">
          <div>
            <p className="xsv-kicker">End-to-end solutions</p>
            <h2 className="xsv-h2">
              Two things,<br />
              <span>done properly.</span>
            </h2>
          </div>
          <div className="xsv-head-side">
            <p className="xsv-lede">Software and marketing under one roof.</p>
            <a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')} className="xsv-textlink">
              Start a project <Arrow />
            </a>
          </div>
        </header>

        {SERVICES.map((s, i) => (
          <ServiceRow key={s.title} index={i} {...s} />
        ))}

        <ol className="xsv-steps" aria-label="How we work">
          {STEPS.map((s, i) => (
            <li key={s.t} className="xsv-step">
              <span className="xsv-step-dot">{i + 1}</span>
              <h4 className="xsv-step-title">{s.t}</h4>
              <p className="xsv-step-text">{s.d}</p>
            </li>
          ))}
        </ol>

        <div className="xsv-banner">
          <div className="xsv-banner-copy">
            <span className="xsv-banner-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
                <path d="M8.5 11.5h7M8.5 14.5h4" />
              </svg>
            </span>
            <div>
              <h3 className="xsv-banner-title">Not sure which service fits?</h3>
              <p className="xsv-banner-text">Tell us the goal and our experts will scope the right solution.</p>
            </div>
          </div>
          <div className="xsv-banner-cta">
            <a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')} className="xsv-btn xsv-btn-main">Book a meeting</a>
            <a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')} className="xsv-btn xsv-btn-ghost">Get a quote</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
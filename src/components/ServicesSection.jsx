import { useRef, useEffect } from 'react'
import './ServicesSection.css'

/* ---------- Illustrations (inline SVG, no image files needed) ---------- */

function MarketingArt() {
  return (
    <svg className="xsv-art" viewBox="0 0 520 220" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Growth chart showing rising traffic and a number one search ranking">
      <defs>
        <linearGradient id="mk-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1e1b4b" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="mk-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#818cf8" stopOpacity=".55" />
          <stop offset="1" stopColor="#818cf8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="mk-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6366f1" />
          <stop offset=".6" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#f472b6" />
        </linearGradient>
      </defs>
      <rect width="520" height="220" fill="url(#mk-bg)" />
      <g stroke="#818cf8" strokeOpacity=".12">
        <path d="M0 50H520M0 90H520M0 130H520M0 170H520" />
        <path d="M80 0V220M160 0V220M240 0V220M320 0V220M400 0V220M480 0V220" />
      </g>
      <g fill="#818cf8" fillOpacity=".16">
        <rect x="34" y="158" width="26" height="62" rx="5" />
        <rect x="94" y="144" width="26" height="76" rx="5" />
        <rect x="154" y="136" width="26" height="84" rx="5" />
        <rect x="214" y="112" width="26" height="108" rx="5" />
        <rect x="274" y="100" width="26" height="120" rx="5" />
        <rect x="334" y="76" width="26" height="144" rx="5" />
        <rect x="394" y="64" width="26" height="156" rx="5" />
        <rect x="454" y="42" width="26" height="178" rx="5" />
      </g>
      <path d="M0 170 C60 162 90 152 130 140 S200 148 240 115 S320 96 360 70 S440 50 520 28 V220 H0Z" fill="url(#mk-fill)" />
      <path d="M0 170 C60 162 90 152 130 140 S200 148 240 115 S320 96 360 70 S440 50 520 28" fill="none" stroke="url(#mk-line)" strokeWidth="3.5" strokeLinecap="round" />
      <g fill="#0b1030" stroke="#c4b5fd" strokeWidth="2.5">
        <circle cx="130" cy="140" r="6" />
        <circle cx="240" cy="115" r="6" />
        <circle cx="360" cy="70" r="7" />
      </g>
      {/* floating chips */}
      <g className="xsv-float">
        <rect x="26" y="24" width="116" height="36" rx="18" fill="#0b1030" fillOpacity=".9" stroke="#818cf8" strokeOpacity=".5" />
        <circle cx="46" cy="42" r="8" fill="#6366f1" />
        <path d="M42 42l3 3 5-6" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="62" y="47" fill="#e0e7ff" fontSize="13" fontWeight="700" fontFamily="inherit">Ranked #1</text>
      </g>
      <g className="xsv-float xsv-float-b">
        <rect x="318" y="18" width="150" height="36" rx="18" fill="#0b1030" fillOpacity=".9" stroke="#f472b6" strokeOpacity=".55" />
        <path d="M338 44l7-8 5 5 8-9" stroke="#f472b6" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="366" y="41" fill="#fce7f3" fontSize="13" fontWeight="700" fontFamily="inherit">+248% reach</text>
      </g>
    </svg>
  )
}

function WebAppArt() {
  return (
    <svg className="xsv-art" viewBox="0 0 520 220" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Web application dashboard inside a browser window">
      <defs>
        <linearGradient id="wa-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1e1b4b" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="wa-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6366f1" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="wa-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6366f1" stopOpacity=".4" />
          <stop offset="1" stopColor="#6366f1" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="520" height="220" fill="url(#wa-bg)" />
      <g stroke="#818cf8" strokeOpacity=".1">
        <path d="M0 50H520M0 90H520M0 130H520M0 170H520" />
        <path d="M80 0V220M160 0V220M240 0V220M320 0V220M400 0V220M480 0V220" />
      </g>
      {/* browser window */}
      <rect x="70" y="26" width="380" height="176" rx="14" fill="#0b1030" stroke="#818cf8" strokeOpacity=".45" />
      <path d="M70 40a14 14 0 0 1 14-14h352a14 14 0 0 1 14 14v18H70z" fill="#ffffff" fillOpacity=".05" />
      <circle cx="90" cy="42" r="4" fill="#f87171" />
      <circle cx="104" cy="42" r="4" fill="#fbbf24" />
      <circle cx="118" cy="42" r="4" fill="#34d399" />
      <rect x="146" y="35" width="210" height="14" rx="7" fill="#ffffff" fillOpacity=".08" />
      {/* sidebar */}
      <rect x="82" y="68" width="66" height="122" rx="8" fill="#ffffff" fillOpacity=".04" />
      <rect x="92" y="80" width="46" height="8" rx="4" fill="#818cf8" fillOpacity=".8" />
      <rect x="92" y="98" width="38" height="6" rx="3" fill="#ffffff" fillOpacity=".18" />
      <rect x="92" y="112" width="44" height="6" rx="3" fill="#ffffff" fillOpacity=".18" />
      <rect x="92" y="126" width="30" height="6" rx="3" fill="#ffffff" fillOpacity=".18" />
      <rect x="92" y="140" width="40" height="6" rx="3" fill="#ffffff" fillOpacity=".18" />
      {/* stat cards */}
      <g fill="#ffffff" fillOpacity=".06" stroke="#818cf8" strokeOpacity=".2">
        <rect x="160" y="68" width="86" height="40" rx="8" />
        <rect x="254" y="68" width="86" height="40" rx="8" />
        <rect x="348" y="68" width="92" height="40" rx="8" />
      </g>
      <g fill="#c7d2fe">
        <rect x="170" y="78" width="30" height="5" rx="2.5" fillOpacity=".5" />
        <rect x="264" y="78" width="30" height="5" rx="2.5" fillOpacity=".5" />
        <rect x="358" y="78" width="30" height="5" rx="2.5" fillOpacity=".5" />
        <rect x="170" y="90" width="48" height="9" rx="4.5" />
        <rect x="264" y="90" width="40" height="9" rx="4.5" />
        <rect x="358" y="90" width="54" height="9" rx="4.5" />
      </g>
      {/* chart */}
      <rect x="160" y="116" width="280" height="74" rx="8" fill="#ffffff" fillOpacity=".04" />
      <path d="M170 176 C200 170 220 150 250 154 S300 136 330 140 S390 124 430 128 V186 H170Z" fill="url(#wa-fill)" />
      <path d="M170 176 C200 170 220 150 250 154 S300 136 330 140 S390 124 430 128" fill="none" stroke="url(#wa-line)" strokeWidth="3" strokeLinecap="round" />
      {/* floating chips */}
      <g className="xsv-float xsv-float-b">
        <rect x="18" y="150" width="124" height="36" rx="18" fill="#0b1030" fillOpacity=".92" stroke="#22d3ee" strokeOpacity=".55" />
        <circle cx="38" cy="168" r="5" fill="#34d399" />
        <text x="52" y="173" fill="#cffafe" fontSize="12.5" fontWeight="700" fontFamily="ui-monospace, Menlo, Consolas, monospace">API · 200 OK</text>
      </g>
      <g className="xsv-float">
        <rect x="424" y="18" width="78" height="36" rx="18" fill="#0b1030" fillOpacity=".92" stroke="#818cf8" strokeOpacity=".6" />
        <text x="440" y="41" fill="#e0e7ff" fontSize="15" fontWeight="700" fontFamily="ui-monospace, Menlo, Consolas, monospace">&lt;/&gt;</text>
      </g>
    </svg>
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
import { useEffect, useRef, useState } from 'react'
import './Hero.css'
import { handleScrollClick } from '../utils/scroll'
import ServicesSection from './ServicesSection'
import ProjectsShowcase from './ProjectsShowcase'
import HowWeWork from './HowWeWork'
import TechPartnersSection from './TechPartnersSection'
import ContactSection from './ContactSection'

function CountUp({ to, suffix = '' }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)

  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t) => {
        const p = Math.min((t - t0) / 1600, 1)
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => io.disconnect()
  }, [to])

  return <span ref={ref}>{n}{suffix}</span>
}

const chips = [
  { label: 'SEO', cls: 'c1' },
  { label: 'Web & App Development', cls: 'c2' },
  { label: 'Google ADS', cls: 'c3' },
  { label: 'Digital Marketing', cls: 'c4' },
  { label: 'Social Media Marketing', cls: 'c5' },
]

function BoyStage() {
  return (
    <div className="boy">
      <video className="boy-img" autoPlay muted loop playsInline>
        <source src="/standing-man-CT_QdOv6.mp4" type="video/mp4" />
      </video>
      {chips.map((c) => (
        <span key={c.label} className={`boy-chip ${c.cls}`}>{c.label}</span>
      ))}
    </div>
  )
}

const aboutStats = [
  { big: '500+', small: 'Projects', sub: 'Delivered', icon: 'M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3' },
  { big: '98%', small: 'Clients', sub: 'Satisfied', icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 11.5a.5.5 0 1 0 0 1' },
  { big: '360°', small: '', sub: 'Digital Growth Solutions', icon: 'M16 20v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM20 20v-1a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8' },
  { big: 'Results', small: 'Focused', sub: 'Strategy & Execution', icon: 'M3 17l6-6 4 4 8-8M15 7h6v6' },
]

function StatIcon({ d }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  )
}

const expertise = [
  {
    name: 'Web applications',
    intro: 'Portals and platforms your team and customers use every day, built to stay fast and secure as you grow.',
    points: [
      { h: 'Built around your workflow', p: 'We map how your business actually runs, then build dashboards, portals and tools that remove manual work instead of adding steps.' },
      { h: 'Secure and scalable', p: 'Role-based access, clean architecture and tested releases, so the system holds up when users and data grow.' },
      { h: 'Integrations included', p: 'Payments, CRMs, QR systems and third-party APIs connect to your app so everything works from one place.' },
    ],
    tags: ['Laravel', 'CodeIgniter', 'Enterprise portals', 'News portals', 'eCommerce', 'QR code systems'],
  },
  {
    name: 'Websites',
    intro: 'Fast, good-looking websites that load quickly on every device and are easy for you to update.',
    points: [
      { h: 'Design that converts', p: 'Clear layouts and strong calls to action guide visitors toward enquiries, calls and orders.' },
      { h: 'Responsive everywhere', p: 'Every page is checked on phones, tablets and desktops so nothing breaks or feels cramped.' },
      { h: 'Easy to manage', p: 'Change text, images and pages yourself with a simple admin, no developer needed for small edits.' },
    ],
    tags: ['Static & dynamic', 'HTML5', 'Bootstrap', 'WordPress', 'PHP'],
  },
  {
    name: 'Custom software',
    intro: 'Software built around your process, not a template, so your team works the way they want to.',
    points: [
      { h: 'Understand first', p: 'We start with workshops and requirements, so the first version already solves the real problem.' },
      { h: 'Built in small steps', p: 'Agile delivery means you see working features every few weeks and can steer as we go.' },
      { h: 'SaaS ready', p: 'Planning to sell your idea as a product? We build multi-user, subscription-ready platforms.' },
    ],
    tags: ['Business solutions', 'SaaS products', 'API integration'],
  },
  {
    name: 'Mobile apps',
    intro: 'One idea, on every phone. Native feel, smooth performance and a single team behind it.',
    points: [
      { h: 'iOS and Android', p: 'Publish on both stores from one codebase with React Native or Flutter, without compromising on speed.' },
      { h: 'Clean, simple UX', p: 'Screens designed for thumbs, with clear flows that people understand in seconds.' },
      { h: 'Store launch support', p: 'We handle builds, store listings and approvals, then keep improving after release.' },
    ],
    tags: ['iOS', 'Android', 'React Native', 'Flutter'],
  },
  {
    name: 'Cloud & hosting',
    intro: 'Your website, app and email, always online, backed up and protected.',
    points: [
      { h: 'Reliable uptime', p: 'Well-configured servers and monitoring keep your site available when customers need it.' },
      { h: 'Domains and email', p: 'We register your domain and set up professional business email on your own name.' },
      { h: 'Speed and security', p: 'SSL, backups and performance tuning come as standard, not as an extra.' },
    ],
    tags: ['Cloud hosting', 'Domains', 'Business email', 'Servers'],
  },
  {
    name: 'Maintenance & support',
    intro: 'We stay after launch. Updates, fixes and a team you can call any day.',
    points: [
      { h: 'Regular updates', p: 'Security patches, plugin and framework updates are handled before they turn into problems.' },
      { h: 'Quick fixes', p: 'Something broke? Call or message us and a developer who knows your project picks it up.' },
      { h: 'Speed optimization', p: 'We keep pages light and fast, which helps both visitors and search rankings.' },
    ],
    tags: ['Web maintenance', 'App maintenance', 'Technical support', 'Speed optimization'],
  },
]

const ticker = ['SEO', 'React', 'Laravel', 'Flutter', 'WordPress', 'Cloud', 'eCommerce', 'SaaS', 'APIs', 'React Native']

const webTech = [
  { icon: '🐍', label: 'Python', bg: '#fce7f3', color: '#db2777' },
  { icon: '⚙️', label: 'Laravel', bg: '#fee2e2', color: '#dc2626' },
  { icon: '🔥', label: 'CodeIgniter', bg: '#fef3c7', color: '#d97706' },
  { icon: '📘', label: 'PHP', bg: '#dbeafe', color: '#2563eb' },
  { icon: '⚛️', label: 'React JS', bg: '#dbeafe', color: '#0891b2' },
  { icon: '▲', label: 'Next.js', bg: '#e0e7ff', color: '#4f46e5' },
  { icon: '📱', label: 'iOS', bg: '#ffe4e6', color: '#be123c' },
  { icon: '🤖', label: 'Android', bg: '#d1fae5', color: '#059669' },
  { icon: '📲', label: 'React Native', bg: '#fce7f3', color: '#be185d' },
  { icon: '☁️', label: 'Hybrid Apps', bg: '#dbeafe', color: '#0284c7' },
]

const marketingTech = [
  { icon: '🔍', label: 'SEO Marketing', bg: '#dbeafe', color: '#1d4ed8' },
  { icon: '📊', label: 'SMO Marketing', bg: '#dcfce7', color: '#16a34a' },
  { icon: '📢', label: 'Google Ads', bg: '#fef3c7', color: '#ca8a04' },
  { icon: '📱', label: 'Social Media Ads', bg: '#ede9fe', color: '#7c3aed' },
  { icon: '✍️', label: 'Content Writing', bg: '#fce7f3', color: '#be185d' },
  { icon: '💬', label: 'WhatsApp API', bg: '#d1fae5', color: '#047857' },
]

const partners = [
  { icon: '☁️', name: 'AWS', role: 'Partner Network', color: '#FF9900' },
  { icon: '🏦', name: 'Enkash', role: 'Authorized Partner', color: '#0066CC' },
  { icon: '📊', name: 'Tally', role: 'Associate Partner', color: '#5A1F7A' },
  { icon: '📱', name: 'PhonePe', role: 'Partner Network', color: '#5F259F' },
]

// 3 copies per group so the slider never shows an empty gap on wide screens
const partnerLoop = [...partners, ...partners, ...partners]

function TechBadge({ icon, label, bg, color }) {
  return (
    <div className="tech-badge">
      <div className="tech-icon" style={{ background: bg, color }}>{icon}</div>
      <span>{label}</span>
    </div>
  )
}

function PartnerLogo({ icon, name, role, color }) {
  return (
    <div className="partner-logo">
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{icon}</div>
        <div style={{ fontSize: '0.9rem', fontWeight: 700, color }}>{name}</div>
        <div style={{ fontSize: '0.75rem', color: '#666' }}>{role}</div>
      </div>
    </div>
  )
}

function Hero() {
  const [active, setActive] = useState(0)
  const cur = expertise[active]
  return (
    <div className="xp">
      {/* HERO */}
      <section id="home" className="hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/business-model-BlAS4wcM.mp4" type="video/mp4" />
        </video>
        <div className="hero-tint" />
        <div className="hero-fade" />

        <div className="wrap hero-grid">
          <div className="hero-side">
            <p className="hero-tag">A reference-based company</p>
            <p className="hero-sub">
              We build websites, web apps and marketing campaigns that bring you customers,
              and we only grow through the clients who recommend us.
            </p>
            <div className="hero-cta">
              <a href="#services" onClick={(e) => handleScrollClick(e, 'services')} className="btn btn-main">See what we build</a>
              <a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')} className="btn btn-ghost">Start a project</a>
            </div>
          </div>
        </div>
      </section>

      {/* BOY SHOWCASE (white, About us style) */}
      <section id="growth" className="sec boy-sec">
        <div className="wrap boy-grid">
          <div className="boy-left">
            <h2 className="boy-title"><span>ABOUT</span> US</h2>
            <p className="boy-kicker">Digital growth partner</p>
            <h3 className="boy-h3">We turn digital presence into business growth.</h3>
            <p className="boy-lede">
              Strategy, design and code in one team, so your online presence turns into
              enquiries, orders and repeat business.
            </p>

            <div className="boy-stats">
              {aboutStats.map((s) => (
                <div className="boy-stat" key={s.sub}>
                  <span className="boy-stat-ic"><StatIcon d={s.icon} /></span>
                  <b>{s.big}</b>
                  {s.small && <strong>{s.small}</strong>}
                  <small>{s.sub}</small>
                </div>
              ))}
            </div>

            <div className="boy-actions">
              <a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')} className="boy-cta">Let's grow your brand</a>
              <a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')} className="boy-team">Meet our team <i /></a>
            </div>
          </div>

          <BoyStage />
        </div>
      </section>

      <ServicesSection />

      <HowWeWork />

      {/* EXPERTISE (sidebar + detail layout) */}
      <section id="expertise" className="sec exp-sec">
        <div className="wrap">
          <div className="exp-head">
            <div>
              <p className="exp-kicker">Expertise</p>
              <h2 className="h2">What our team can build</h2>
            </div>
            <p className="lede">From a five-page website to a platform with thousands of users. One team handles design, code, hosting and support.</p>
          </div>

          <div className="exp-layout">
            <aside className="exp-side">
              <div className="exp-menu">
                <h4 className="exp-menu-title">Our Expertise</h4>
                {expertise.map((x, i) => (
                  <button
                    type="button"
                    key={x.name}
                    className={`exp-item${i === active ? ' on' : ''}`}
                    onClick={() => setActive(i)}
                  >
                    <span>{x.name}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                  </button>
                ))}
              </div>

              <div className="exp-help">
                <h4>Contact us for help</h4>
                <p>Get in touch and let us know how we can help as soon as possible.</p>
                <a href="tel:+919971392828" className="exp-help-btn">+91 997-139-2828</a>
              </div>
            </aside>

            <div className="exp-detail" key={active}>
              <span className="exp-count">{String(active + 1).padStart(2, '0')} / {String(expertise.length).padStart(2, '0')}</span>

              <h3 className="exp-title">{cur.name}</h3>
              <p className="exp-intro">{cur.intro}</p>

              {cur.points.map((p) => (
                <div className="exp-point" key={p.h}>
                  <h4>{p.h}</h4>
                  <p>{p.p}</p>
                </div>
              ))}

              <h4 className="exp-point-h">Technologies and services</h4>
              <div className="tags">
                {cur.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>

              <a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')} className="exp-cta">Start a project</a>
            </div>
          </div>
        </div>
      </section>

      <TechPartnersSection />

      <ProjectsShowcase />

      {/* WHY */}
      <section id="about" className="sec">
        <div className="wrap why">
          <div>
            <h2 className="h2">Clients send us their friends.</h2>
            <p className="lede">
              We are a reference-based company. Most of our work comes from people who
              trusted us once and told someone else.
            </p>
          </div>
          <div className="why-list">
            <div><h4>Proven track record</h4><p>Years of delivering work that clients put their name behind.</p></div>
            <div><h4>Current technology</h4><p>Modern tools and frameworks, chosen for your goals.</p></div>
            <div><h4>A team that stays</h4><p>The people who build your product also support it.</p></div>
            <div><h4>Tested before launch</h4><p>Quality checks on every release, and agile delivery in small steps.</p></div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  )
}

export default Hero
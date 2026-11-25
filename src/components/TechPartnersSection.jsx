import './TechPartnersSection.css'
import { handleScrollClick } from '../utils/scroll'

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

// 3 copies per group for seamless infinite loop
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

function TechPartnersSection() {
  return (
    <>
      {/* TECHNOLOGY BADGES */}
      <section className="tech-section">
        <div className="wrap">
          <div className="tech-head">
            <h3>Web & Mobile Applications</h3>
            <p>Secure, scalable web and mobile apps for every device</p>
          </div>

          <div className="tech-grid">
            {webTech.map((t) => <TechBadge key={t.label} {...t} />)}
          </div>

          <div className="tech-link">
            <a href="#expertise" onClick={(e) => handleScrollClick(e, 'expertise')}>+ All web & mobile ›</a>
          </div>
        </div>
      </section>

      {/* DIGITAL MARKETING SERVICES */}
      <section className="tech-section tech-alt">
        <div className="wrap">
          <div className="tech-head">
            <h3>Digital Marketing Services</h3>
            <p>Strategic marketing solutions to grow your business</p>
          </div>

          <div className="tech-grid cols-6">
            {marketingTech.map((t) => <TechBadge key={t.label} {...t} />)}
          </div>

          <div className="tech-link">
            <a href="#services" onClick={(e) => handleScrollClick(e, 'services')}>+ All digital marketing ›</a>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners-section">
        <div className="wrap">
          <div className="partners-head">
            <h3>Our Partners</h3>
          </div>

          <div className="partners-slider">
            <div className="partners-track">
              {/* Two identical groups for seamless infinite loop */}
              {[0, 1].map((g) => (
                <div className="partners-group" key={g} aria-hidden={g === 1}>
                  {partnerLoop.map((p, i) => <PartnerLogo key={`${g}-${i}`} {...p} />)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TechPartnersSection

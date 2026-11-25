import { useState } from 'react'
import './ContactSection.css'

const CONTACTS = [
  {
    label: 'Sales',
    value: '+91 997-139-2828',
    href: 'tel:+919971392828',
    icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
  },
  {
    label: 'Support',
    value: '+91 997-188-6346',
    href: 'tel:+919971886346',
    icon: 'M3 14v-2a9 9 0 0 1 18 0v2M3 14h3v5H4a1 1 0 0 1-1-1zM21 14h-3v5h2a1 1 0 0 0 1-1z',
  },
  {
    label: 'International',
    value: '+52 984-927-8753',
    href: 'tel:+529849278753',
    icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20',
  },
  {
    label: 'Email',
    value: 'info@xpecto.com',
    href: 'mailto:info@xpecto.com',
    icon: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6',
  },
]

const SERVICES = [
  ['digital-marketing', 'Digital marketing'],
  ['web-app', 'Web application'],
  ['mobile-app', 'Mobile app'],
  ['consulting', 'Consulting'],
  ['other', 'Something else'],
]

function Icon({ d }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}

function ContactSection() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // TODO: send the form data to your backend / email service here
    setSent(true)
    e.currentTarget.reset()
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="xct">
      <div className="xct-wrap">
        <div className="xct-grid">
          {/* ---------- Left: info ---------- */}
          <div className="xct-info">
            <p className="xct-kicker">Get in touch</p>
            <h2 className="xct-h2">
              Tell us <span>what you need.</span>
            </h2>
            <p className="xct-lede">
              Share a few details and we'll reply to every message within 24 hours.
            </p>

            <ul className="xct-cards">
              {CONTACTS.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="xct-card">
                    <span className="xct-card-icon">
                      <Icon d={c.icon} />
                    </span>
                    <span className="xct-card-text">
                      <span className="xct-card-label">{c.label}</span>
                      <span className="xct-card-value">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Right: form ---------- */}
          <form className="xct-form" onSubmit={onSubmit}>
            <div className="xct-form-head">
              <h3 className="xct-form-title">Start a project</h3>
              <span className="xct-form-note">Takes under a minute</span>
            </div>

            <div className="xct-fields">
              <div className="xct-field">
                <label htmlFor="xct-name">Your name</label>
                <input id="xct-name" name="name" type="text" placeholder="Name" autoComplete="name" required />
              </div>

              <div className="xct-field">
                <label htmlFor="xct-email">Email</label>
                <input id="xct-email" name="email" type="email" placeholder="Email" autoComplete="email" required />
              </div>

              <div className="xct-field xct-span">
                <label htmlFor="xct-phone">
                  Phone <em>(optional)</em>
                </label>
                <input id="xct-phone" name="phone" type="tel" placeholder="9999999999" autoComplete="tel" />
              </div>

              <fieldset className="xct-field xct-span xct-service">
                <legend>What do you need?</legend>
                <div className="xct-pills">
                  {SERVICES.map(([value, label], i) => (
                    <label key={value} className="xct-pill">
                      <input type="radio" name="service" value={value} required={i === 0} />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="xct-field xct-span">
                <label htmlFor="xct-message">Tell us about your project</label>
                <textarea id="xct-message" name="message" rows="3" placeholder="" required />
              </div>
            </div>

            <button type="submit" className="xct-submit">
              <span>Send message</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
              </svg>
            </button>

            <p className={`xct-status${sent ? ' is-on' : ''}`} role="status" aria-live="polite">
              {sent ? "Thanks! Your message is in — we'll reply within 24 hours." : ''}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
import './Services.css'
import { handleScrollClick } from '../utils/scroll'

function ServiceCard({ icon, num, title, text, items }) {
  return (
    <article className="svc">
      <div className="svc-top">
        <span className="svc-ic">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d={icon} />
          </svg>
        </span>
        <span className="svc-num">{num}</span>
      </div>

      <h3>{title}</h3>
      <p>{text}</p>

      <ul className="svc-list">
        {items.map((i) => (
          <li key={i}>
            <span className="svc-dot">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5 9-10" />
              </svg>
            </span>
            {i}
          </li>
        ))}
      </ul>

      <a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')} className="svc-link">
        Talk to us about {title.toLowerCase()} <span>›</span>
      </a>
    </article>
  )
}

function Services() {
  return (
    <section id="services" className="sec">
      <div className="wrap">
        <div className="svc-head">
          <p className="svc-kicker">End-to-end solutions</p>
          <h2 className="svc-h2">Two things, done properly.</h2>
          <p className="svc-lede">Software and marketing under one roof.</p>
        </div>

        <div className="svc-grid">
          <ServiceCard
            num="01"
            icon="M3 17l6-6 4 4 8-8M15 7h6v6"
            title="Digital marketing"
            text="Campaigns that put your business in front of people ready to buy."
            items={['SEO', 'Social media', 'Content', 'PPC ads', 'Email']}
          />
          <ServiceCard
            num="02"
            icon="M4 5h16v11H4zM8 20h8M12 16v4"
            title="Web applications"
            text="Software shaped around how your business actually works."
            items={['Custom web apps', 'eCommerce', 'Progressive web apps', 'APIs', 'Cloud integration']}
          />
        </div>

        <div className="svc-banner">
          <div>
            <h4>Not sure which service fits?</h4>
            <p>Tell us the goal and our experts will scope the right solution.</p>
          </div>
          <div className="svc-banner-cta">
            <a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')} className="sb-main">Book a meeting</a>
            <a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')} className="sb-ghost">Get a quote</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

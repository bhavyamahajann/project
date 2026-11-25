import './ProjectsShowcase.css'

/* ---------- small shared bits ---------- */

const Globe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
  </svg>
)

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12l5 5 9-10" />
  </svg>
)

/* ---------- page bodies (what's "inside" each phone) ---------- */

function WebDevPage() {
  return (
    <>
      <div className="ph-hero">
        <h4>Build Fast.<br />Scale Faster.</h4>
        <p>Custom websites that turn visitors into customers.</p>
        <span className="ph-btn">Get Started</span>
      </div>

      <div className="ph-body">
        <div className="ph-stats">
          <div><b>120+</b><span>Projects</span></div>
          <div><b>99.9%</b><span>Uptime</span></div>
          <div><b>24/7</b><span>Support</span></div>
        </div>

        <div className="ph-cards">
          <div className="ph-card">
            <i className="ph-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></svg></i>
            <b>Lightning Fast</b>
            <span>Optimised for speed</span>
          </div>
          <div className="ph-card">
            <i className="ph-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /></svg></i>
            <b>Secure</b>
            <span>Built-in protection</span>
          </div>
        </div>

        <div className="ph-code">
          <span style={{ width: '46%' }} className="c1" />
          <span style={{ width: '72%' }} className="c2" />
          <span style={{ width: '58%' }} className="c3" />
          <span style={{ width: '34%' }} className="c1" />
          <span style={{ width: '64%' }} className="c2" />
        </div>

        <div className="ph-list">
          <p><Check /> Responsive on all devices</p>
          <p><Check /> SEO-ready structure</p>
          <p><Check /> Easy to maintain</p>
        </div>
      </div>
    </>
  )
}

function SeoPage() {
  return (
    <>
      <div className="ph-hero">
        <h4>Rank #1<br />on Google</h4>
        <p>Organic growth that brings buyers, not just visitors.</p>
        <span className="ph-btn">Free SEO Audit</span>
      </div>

      <div className="ph-body">
        <div className="ph-chart">
          <div className="ph-chart-top">
            <span>Organic traffic</span>
            <b>+320%</b>
          </div>
          <svg viewBox="0 0 160 60" preserveAspectRatio="none">
            <defs>
              <linearGradient id="seoFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="currentColor" stopOpacity=".35" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 52 C20 50 28 40 48 42 S80 26 100 24 S136 10 160 4 V60 H0Z" fill="url(#seoFill)" />
            <path d="M0 52 C20 50 28 40 48 42 S80 26 100 24 S136 10 160 4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="ph-rows">
          <div className="ph-row"><span>best web agency</span><em>#1</em></div>
          <div className="ph-row"><span>seo services near me</span><em>#2</em></div>
          <div className="ph-row"><span>digital marketing</span><em>#3</em></div>
          <div className="ph-row"><span>ppc management</span><em>#4</em></div>
        </div>

        <div className="ph-stats">
          <div><b>85K</b><span>Visits</span></div>
          <div><b>4.2K</b><span>Leads</span></div>
          <div><b>12x</b><span>ROI</span></div>
        </div>
      </div>
    </>
  )
}

function DesignPage() {
  return (
    <>
      <div className="ph-hero">
        <h4>Design That<br />Stands Out</h4>
        <p>Brands and interfaces people remember.</p>
        <span className="ph-btn">View Our Work</span>
      </div>

      <div className="ph-body">
        <div className="ph-swatches">
          <i style={{ background: '#ef4444' }} />
          <i style={{ background: '#f97316' }} />
          <i style={{ background: '#fbbf24' }} />
          <i style={{ background: '#1e293b' }} />
          <i style={{ background: '#e2e8f0' }} />
        </div>

        <div className="ph-cards">
          <div className="ph-card ph-thumb">
            <div className="ph-art a1" />
            <b>Branding</b>
            <span>Logo &amp; identity</span>
          </div>
          <div className="ph-card ph-thumb">
            <div className="ph-art a2" />
            <b>UI Kit</b>
            <span>Design system</span>
          </div>
        </div>

        <div className="ph-type">
          <strong>Aa</strong>
          <div>
            <b>Typography</b>
            <span>Clean, bold, readable</span>
          </div>
        </div>

        <div className="ph-art a3 ph-wide" />
      </div>
    </>
  )
}

function AppPage() {
  return (
    <>
      <div className="ph-hero">
        <h4>Your Idea.<br />Our App.</h4>
        <p>Native-quality iOS &amp; Android apps, shipped fast.</p>
        <div className="ph-btns">
          <span className="ph-btn">App Store</span>
          <span className="ph-btn ph-btn-ghost">Play Store</span>
        </div>
      </div>

      <div className="ph-body">
        <div className="ph-rating">
          <b>4.9 ★</b>
          <span>50K+ downloads</span>
        </div>

        <div className="ph-cards">
          <div className="ph-card">
            <i className="ph-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2.5" /><path d="M11 18h2" /></svg></i>
            <b>iOS</b>
            <span>Swift &amp; React Native</span>
          </div>
          <div className="ph-card">
            <i className="ph-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3" width="14" height="18" rx="2.5" /><path d="M10 18h4" /></svg></i>
            <b>Android</b>
            <span>Kotlin &amp; Flutter</span>
          </div>
        </div>

        <div className="ph-rows">
          <div className="ph-row"><span>Push notifications</span><em><Check /></em></div>
          <div className="ph-row"><span>Offline mode</span><em><Check /></em></div>
          <div className="ph-row"><span>Secure payments</span><em><Check /></em></div>
        </div>
      </div>
    </>
  )
}

/* ---------- data ---------- */

const PHONES = [
  { label: 'WEB DEVELOPMENT', color: '#0e7490', url: 'yourbrand.com',  logo: 'Brand',  Page: WebDevPage, scroll: -150 },
  { label: 'SEO & MARKETING', color: '#f59e0b', url: 'growthly.com',   logo: 'Growthly', Page: SeoPage,  scroll: -140 },
  { label: 'WEB DESIGN',      color: '#ef4444', url: 'studio.design',  logo: 'Studio', Page: DesignPage, scroll: -150 },
  { label: 'APP DEVELOPMENT', color: '#8b5cf6', url: 'myapp.io',       logo: 'MyApp',  Page: AppPage,    scroll: -140 }
]

function ProjectShowcase() {
  return (
    <section className="ph-section">
      <div className="ph-grid">
        {PHONES.map(({ label, color, url, logo, Page, scroll }) => (
          <figure key={label} className="ph-item">
            <div className="ph" style={{ '--c': color, '--scroll': `${scroll}px` }}>
              <span className="ph-notch" aria-hidden="true" />

              <div className="ph-screen">
                <div className="ph-url">
                  <Globe />
                  <span>{url}</span>
                </div>

                <div className="ph-nav">
                  <span className="ph-logo">{logo}</span>
                  <span className="ph-burger" aria-hidden="true"><i /><i /><i /></span>
                </div>

                <div className="ph-viewport">
                  <div className="ph-page">
                    <Page />
                  </div>
                </div>

                <span className="ph-home" aria-hidden="true" />
              </div>
            </div>
            <figcaption className="ph-label">{label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default ProjectShowcase
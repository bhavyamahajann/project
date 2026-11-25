import './HowWeWork.css'

const steps = [
  {
    num: '01',
    title: 'UNDERSTAND',
    desc: 'We learn your business, audience, goals and competition.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    num: '02',
    title: 'STRATEGIZE',
    desc: 'We build a focused growth plan across SEO, GEO, AEO, AI Search & Paid Media.',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80'
  },
  {
    num: '03',
    title: 'OPTIMIZATION',
    desc: 'Our team turns strategy into campaigns, content, creative and technical action.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    num: '04',
    title: 'GROWTH',
    desc: 'We track what works, improve continuously and scale what drives growth.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  }
]

function HowWeWork() {
  return (
    <section className="hww-section">
      <h2 className="hww-title">HOW WE WORK</h2>

      <div className="hww-grid">
        {steps.map((step, i) => (
          <div key={step.num} className={`hww-card hww-card-${i + 1}`}>
            <div className="hww-image">
              <img
                src={step.image}
                alt={step.title}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.visibility = 'hidden'
                }}
              />
            </div>

            <div className="hww-content">
              <span className="hww-num">{step.num}</span>
              <h3 className="hww-step-title">{step.title}</h3>
              <p className="hww-desc">{step.desc}</p>
            </div>

            {i < steps.length - 1 && (
              <svg
                className="hww-arrow"
                viewBox="0 0 50 30"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M2 4 Q 32 2 46 24" strokeDasharray="3 3" />
                <path
                  d="M40 19 L46 25 L37 26"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowWeWork
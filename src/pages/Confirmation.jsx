import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { ICONS } from '../data'

function Icon({ name, style }) {
  return (
    <span style={style} dangerouslySetInnerHTML={{ __html: ICONS[name] }} />
  )
}

export default function Confirmation() {
  const location = useLocation()
  const navigate = useNavigate()
  const data = location.state

  const [copied, setCopied] = useState(false)

  if (!data) {
    return (
      <div className="container wrap py-5 text-center">
        <p className="lead-muted mb-4">No booking found.</p>
        <Link to="/booking" className="btn btn-amber">Book an appointment</Link>
      </div>
    )
  }

  const { num, service, name, email, phone, area, date, time } = data

  function saveNum() {
    navigator.clipboard?.writeText(num).catch(() => {})
    setCopied(true)
  }

  function bookAnother() {
    navigate('/booking')
  }

  const firstName = name.split(' ')[0] || name

  return (
    <>
      {/* hero band */}
      <section className="band-cream" style={{ borderRadius: 0, borderLeft: 0, borderRight: 0 }}>
        <div className="container wrap text-center py-5">
          <div className="confirm-badge mb-3">
            <Icon name="check" style={{ width: 14, height: 14, display: 'inline-flex' }} />
            Booking confirmed
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(40px,6vw,68px)' }}>
            See you soon, <span style={{ color: 'var(--amber-dark)' }}>{firstName}</span>.
          </h1>
          <p className="lead-muted mt-2 mb-0">Dr. Teeth has got you. Here's everything you need to know before your visit.</p>
        </div>
      </section>

      <div className="container wrap py-5" style={{ maxWidth: 760 }}>

        {/* confirmation number */}
        <div className="band band-blue d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
          <div>
            <div className="label-cap mb-1">Confirmation number</div>
            <div className="confnum">{num}</div>
          </div>
          <button
            className="btn btn-ghost"
            style={{ background: 'rgba(255,255,255,.1)', borderColor: 'rgba(255,255,255,.4)', color: 'var(--surface)' }}
            onClick={saveNum}
          >
            {copied ? 'Copied ✓' : 'Save this number'}
          </button>
        </div>

        {/* appointment details */}
        <div className="fnd-card p-4 p-lg-5 mb-4">
          <div className="label-cap mb-4">Appointment details</div>
          <div className="row g-4">
            <div className="col-sm-7">
              <div className="label-cap mb-1">Service</div>
              <div className="font-serif fw-bold text-blue" style={{ fontSize: 22, lineHeight: 1.25 }}>{service.name}</div>
              <div className="text-muted" style={{ fontSize: 15 }}>{service.sub}</div>
            </div>
            <div className="col-sm-5">
              <div className="row g-4">
                <div className="col-6 col-sm-12">
                  <div className="label-cap mb-1">Price</div>
                  <div className="price" style={{ fontSize: 24 }}>{service.price}</div>
                </div>
                <div className="col-6 col-sm-12 mt-sm-4">
                  <div className="label-cap mb-1">Duration</div>
                  <div className="font-serif" style={{ fontSize: 20 }}>{service.duration}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* patient information */}
        <div className="fnd-card p-4 p-lg-5 mb-4">
          <div className="label-cap mb-4">Patient information</div>
          <div className="row g-4">
            <div className="col-sm-6">
              <div className="label-cap mb-1">Name</div>
              <div className="font-serif" style={{ fontSize: 19 }}>{name}</div>
            </div>
            <div className="col-sm-6">
              <div className="label-cap mb-1">Email</div>
              <div className="font-serif" style={{ fontSize: 19, wordBreak: 'break-word' }}>{email}</div>
            </div>
            <div className="col-sm-6">
              <div className="label-cap mb-1">Phone</div>
              <div className="font-serif" style={{ fontSize: 19 }}>{phone}</div>
            </div>
            {area && (
              <div className="col-sm-6">
                <div className="label-cap mb-1">Area of concern</div>
                <div className="font-serif" style={{ fontSize: 19 }}>{area}</div>
              </div>
            )}
          </div>
        </div>

        {/* scheduled for */}
        <div className="band band-amber mb-4">
          <div className="label-cap mb-3">Scheduled for</div>
          <div className="row g-3">
            <div className="col-4">
              <div className="d-flex align-items-center gap-2 mb-1" style={{ opacity: .7 }}>
                <Icon name="calendar" style={{ width: 16, height: 16, display: 'inline-flex' }} />
                <span className="label-cap" style={{ color: 'rgba(28,61,86,.7)' }}>Date</span>
              </div>
              <div className="font-serif fw-bold" style={{ fontSize: 20 }}>{date}</div>
            </div>
            <div className="col-4">
              <div className="d-flex align-items-center gap-2 mb-1" style={{ opacity: .7 }}>
                <Icon name="clock" style={{ width: 16, height: 16, display: 'inline-flex' }} />
                <span className="label-cap" style={{ color: 'rgba(28,61,86,.7)' }}>Time</span>
              </div>
              <div className="font-serif fw-bold" style={{ fontSize: 20 }}>{time}</div>
            </div>
            <div className="col-4">
              <div className="d-flex align-items-center gap-2 mb-1" style={{ opacity: .7 }}>
                <Icon name="pin" style={{ width: 16, height: 16, display: 'inline-flex' }} />
                <span className="label-cap" style={{ color: 'rgba(28,61,86,.7)' }}>Location</span>
              </div>
              <div className="font-serif fw-bold" style={{ fontSize: 20 }}>123 Industrial Ave</div>
            </div>
          </div>
        </div>

        {/* what to expect */}
        <div className="fnd-card p-4 p-lg-5 mb-4">
          <div className="label-cap mb-3">What to expect</div>
          {[
            { n: '01', title: 'Check your inbox', body: "We've sent a confirmation to your email with the details of your visit.", amber: false },
            { n: '02', title: "You'll get a reminder", body: "We'll drop you a text and email the day before so it doesn't sneak up on you.", amber: false },
            { n: '03', title: 'Show up a few minutes early', body: "Just a bit of paperwork when you first arrive. Nothing stressful.", amber: false },
            { n: '04', title: "Dr. Teeth will take it from there", body: "We'll go through everything with you and confirm the cost before starting anything.", amber: true },
          ].map(({ n, title, body, amber }) => (
            <div key={n} className="expect-item">
              <span className={`expect-badge${amber ? ' amber' : ''}`}>{n}</span>
              <div>
                <h5>{title}</h5>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* actions */}
        <div className="row g-3">
          <div className="col-sm-6">
            <Link to="/" className="btn btn-blue w-100">← Back to home</Link>
          </div>
          <div className="col-sm-6">
            <button className="btn btn-ghost w-100" onClick={bookAnother}>Book another →</button>
          </div>
        </div>
      </div>
    </>
  )
}

import { useState, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { SERVICES, ICONS } from '../data'

function Icon({ name, style, className }) {
  return (
    <span
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: ICONS[name] }}
    />
  )
}

function pad(n) { return String(n).padStart(2, '0') }

function fmtDate(iso) {
  if (!iso) return '—'
  const [y, m, d] = iso.split('-').map(Number)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${months[m - 1]} ${d}, ${y}`
}

function fmtTime(t) {
  if (!t) return '—'
  let [h, m] = t.split(':').map(Number)
  const ap = h >= 12 ? 'PM' : 'AM'
  h = h % 12 || 12
  return `${h}:${pad(m)} ${ap}`
}

export default function Booking() {
  const navigate = useNavigate()
  const location = useLocation()
  const initialId = location.state?.serviceId ?? null

  const [selectedId, setSelectedId] = useState(initialId)
  const [errors, setErrors] = useState({})
  const [svcError, setSvcError] = useState(false)

  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const areaRef = useRef()
  const dateRef = useRef()
  const timeRef = useRef()

  const selected = SERVICES.find((s) => s.id === selectedId)

  function selectService(id) {
    setSelectedId(id)
    setSvcError(false)
  }

  function validate() {
    const errs = {}
    const name = nameRef.current.value.trim()
    const email = emailRef.current.value.trim()
    const date = dateRef.current.value
    const time = timeRef.current.value

    if (!name) errs.name = true
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = true
    if (!date) errs.date = true
    if (!time) errs.time = true

    setErrors(errs)

    let svcOk = true
    if (!selectedId) { setSvcError(true); svcOk = false }

    return Object.keys(errs).length === 0 && svcOk
  }

  function handleConfirm(e) {
    e.preventDefault()
    if (!validate()) {
      const firstBad = document.querySelector('.is-invalid, [data-svc-error]')
      if (firstBad) window.scrollTo(0, firstBad.getBoundingClientRect().top + window.scrollY - 120)
      return
    }

    const s = selected
    const num = 'FND-' + Math.floor(100000 + Math.random() * 899999)

    navigate('/confirmation', {
      state: {
        num,
        service: s,
        name: nameRef.current.value.trim(),
        email: emailRef.current.value.trim(),
        phone: phoneRef.current.value.trim() || '—',
        area: areaRef.current.value.trim(),
        date: dateRef.current.value,
        time: timeRef.current.value,
      },
    })
  }

  return (
    <div className="container wrap py-4 py-lg-5">
      {/* header row */}
      <div className="d-flex justify-content-between align-items-center mb-4 band-cream" style={{ padding: '14px 22px', borderRadius: 10 }}>
        <Link to="/" className="link-back d-inline-flex align-items-center gap-2">← Back to home</Link>
        <span className="step-pill"><span className="on">Step 01</span> / 02</span>
      </div>

      {/* title */}
      <div className="mb-5">
        <div className="eyebrow mb-2"><span className="idx">01 /</span> Pick what you need</div>
        <h1 className="section-title" style={{ fontSize: 'clamp(34px,4.6vw,52px)' }}>Book a Visit</h1>
        <p className="lead-muted mt-2 mb-0">Choose what you're coming in for and we'll take it from there.</p>
      </div>

      {/* service selection */}
      <div className="row g-4 mb-2">
        {SERVICES.map((s) => (
          <div key={s.id} className="col-12 col-md-6 col-lg-4">
            <div
              className={`service-card select-card${selectedId === s.id ? ' selected' : ''}`}
              role="button"
              tabIndex={0}
              aria-pressed={selectedId === s.id}
              onClick={() => selectService(s.id)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectService(s.id) } }}
            >
              <div className="d-flex justify-content-between align-items-start">
                <span className="svc-icon d-inline-block" dangerouslySetInnerHTML={{ __html: ICONS[s.icon] }} />
                <span className="pick" dangerouslySetInnerHTML={{ __html: ICONS.check }} />
              </div>
              <h3>{s.name}</h3>
              <div className="price svc-price" style={{ fontSize: 26 }}>{s.price}</div>
              <p className="svc-desc">{s.sub}{s.note ? ' · ' + s.note : ''}</p>
              <div className="svc-meta">
                <span className="svc-duration">Approx. {s.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {svcError && (
        <div data-svc-error className="mt-2" style={{ color: '#b14a32', fontFamily: 'var(--lora)', fontSize: 14 }}>
          Please choose a service to continue.
        </div>
      )}

      {/* details form */}
      <div className="fnd-card p-4 p-lg-5 mt-5 position-relative overflow-hidden">
        <div className="sec-num position-absolute" style={{ top: -8, right: 18 }}>02</div>
        <div className="eyebrow mb-4 position-relative"><span className="idx">02 /</span> Enter your details</div>
        <form id="booking-form" noValidate autoComplete="off" className="position-relative" onSubmit={handleConfirm}>
          <div className="row g-4">
            <div className="col-md-6">
              <label className="form-label fnd" htmlFor="f-name">Full name <span className="req">*</span></label>
              <input
                ref={nameRef}
                className={`form-control fnd${errors.name ? ' is-invalid' : ''}`}
                id="f-name"
                type="text"
                placeholder="Jane Doe"
                onChange={() => setErrors((e) => ({ ...e, name: false }))}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fnd" htmlFor="f-email">Email <span className="req">*</span></label>
              <input
                ref={emailRef}
                className={`form-control fnd${errors.email ? ' is-invalid' : ''}`}
                id="f-email"
                type="email"
                placeholder="jane@example.com"
                onChange={() => setErrors((e) => ({ ...e, email: false }))}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fnd" htmlFor="f-phone">Phone</label>
              <input ref={phoneRef} className="form-control fnd" id="f-phone" type="tel" placeholder="(416) 555-0123" />
            </div>
            <div className="col-md-6">
              <label className="form-label fnd" htmlFor="f-area">Tooth / area of concern</label>
              <input ref={areaRef} className="form-control fnd" id="f-area" type="text" placeholder="e.g. lower left molar" />
            </div>
            <div className="col-md-6">
              <label className="form-label fnd" htmlFor="f-date">Preferred date <span className="req">*</span></label>
              <input
                ref={dateRef}
                className={`form-control fnd${errors.date ? ' is-invalid' : ''}`}
                id="f-date"
                type="date"
                onChange={() => setErrors((e) => ({ ...e, date: false }))}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fnd" htmlFor="f-time">Preferred time <span className="req">*</span></label>
              <input
                ref={timeRef}
                className={`form-control fnd${errors.time ? ' is-invalid' : ''}`}
                id="f-time"
                type="time"
                onChange={() => setErrors((e) => ({ ...e, time: false }))}
              />
              <div className="field-hint">Office hours: Mon–Fri 9–6, Sat 10–4</div>
            </div>
          </div>
        </form>
      </div>

      {/* summary bar */}
      {selected ? (
        <div className="band band-blue d-flex flex-wrap justify-content-between align-items-center gap-3 mt-5">
          <div>
            <div className="label-cap mb-1">Selected service</div>
            <div className="font-serif fw-bold" style={{ fontSize: 24, lineHeight: 1.2 }}>{selected.name}</div>
            <div style={{ fontFamily: 'var(--lora)', opacity: .85, fontSize: 15, marginTop: 4 }}>
              {selected.price} · approx. {selected.duration}
            </div>
          </div>
          <button className="btn btn-amber d-inline-flex align-items-center gap-2" onClick={handleConfirm}>
            Confirm booking
            <Icon name="arrow" style={{ width: 18, height: 18, display: 'inline-flex' }} />
          </button>
        </div>
      ) : (
        <p className="text-center mt-5 mb-0" style={{ fontFamily: 'var(--lora)', fontSize: 14, color: 'var(--muted-2)' }}>
          Select a service above to confirm your booking.
        </p>
      )}

      {/* what happens next */}
      <div className="mt-5 pt-4">
        <div className="label-cap mb-4">What happens next?</div>
        <div className="row g-4">
          {[
            { n: '01', title: 'Pick a service', body: "Choose what you're coming in for. Every price is listed up front. We accept insurance." },
            { n: '02', title: 'Fill in your details', body: "Give us your name, email, and when you'd like to come in. Takes about a minute." },
            { n: '03', title: 'Show up', body: "That's it. Dr. Teeth will take care of the rest when you get here." },
          ].map(({ n, title, body }) => (
            <div key={n} className="col-md-4">
              <div className="step-card">
                <div className="step-num">Step {n}</div>
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

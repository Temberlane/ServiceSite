import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { SERVICES, REVIEWS, ICONS } from "../data";

function Icon({ name, style, className }) {
  return (
    <span
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: ICONS[name] }}
    />
  );
}

function Stars() {
  return (
    <span
      className="stars"
      dangerouslySetInnerHTML={{ __html: ICONS.star.repeat(5) }}
    />
  );
}

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => window.scrollTo(0, el.offsetTop - 80), 50);
      }
    }
  }, [location]);

  function goBooking(serviceId) {
    navigate("/booking", { state: { serviceId } });
  }

  return (
    <>
      {/* Hero */}
      <section
        className="hero"
        style={{
          position: "relative",
          minHeight: 520,
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          src="/images/dentist_working.jpg"
          alt="Dentist at work"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(28,61,86,0.82) 0%, rgba(28,61,86,0.55) 60%, rgba(28,61,86,0.25) 100%)",
            zIndex: 1,
          }}
        />
        <div
          className="container wrap py-5"
          style={{ position: "relative", zIndex: 2 }}
        >
          <div className="row">
            <div className="col-lg-7">
              <div className="eyebrow mb-3" style={{ color: "var(--amber)" }}>
                Downtown Ottawa · Since 1489
              </div>
              <h1
                className="display mb-3"
                style={{
                  fontSize: "clamp(38px,5.4vw,62px)",
                  fontFamily: "var(--serif)",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.06,
                  letterSpacing: "-.015em",
                }}
              >
                Dr. Teeth —<br />
                <em
                  style={{
                    fontStyle: "italic",
                    color: "var(--amber)",
                    fontWeight: 700,
                  }}
                >
                  the best dentist in the world.
                </em>
              </h1>
              <p
                className="mb-4"
                style={{
                  color: "rgba(255,253,247,0.85)",
                  fontSize: 19,
                  maxWidth: 520,
                }}
              >
                Dr. Teeth has been looking after the neighbourhood's oral health
                for over 15 years.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/booking" className="btn btn-amber">
                  Book an appointment
                </Link>
                <a
                  href="tel:+14165550123"
                  className="btn btn-ghost d-inline-flex align-items-center gap-2"
                  style={{
                    borderColor: "rgba(255,255,255,0.45)",
                    color: "#fff",
                  }}
                >
                  <Icon
                    name="phone"
                    style={{ width: 18, height: 18, display: "inline-flex" }}
                  />
                  (416) 555-0123
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider wrap container" />

      {/* Services */}
      <section id="services" className="py-5">
        <div className="container wrap py-4">
          <div className="row align-items-end mb-4">
            <div className="col-md-8">
              <div className="eyebrow mb-2">
                <span className="idx">01 /</span> What we do
              </div>
              <h2
                className="section-title"
                style={{ fontSize: "clamp(30px,3.6vw,40px)" }}
              >
                What We Do &amp; What It Costs
              </h2>
            </div>
          </div>
          <div className="row g-4">
            {SERVICES.map((s) => (
              <div key={s.id} className="col-12 col-md-6 col-lg-4">
                <div
                  className={`service-card clickable${s.featured ? " is-featured" : ""}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => goBooking(s.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      goBooking(s.id);
                    }
                  }}
                >
                  {s.featured && <span className="ribbon">Most booked</span>}
                  <span
                    className="svc-icon d-inline-block"
                    dangerouslySetInnerHTML={{ __html: ICONS[s.icon] }}
                  />
                  <h3>{s.name}</h3>
                  <div className="svc-sub">{s.sub}</div>
                  <div className="price svc-price">
                    {s.price}
                    {s.note && <span className="note">{s.note}</span>}
                  </div>
                  <p className="svc-desc">{s.desc}</p>
                  <div className="svc-meta">
                    <span className="svc-duration">Approx. {s.duration}</span>
                    <span className="svc-view">Book this ›</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section
        id="reviews"
        className="py-5"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <img
          src="/images/dentist_office.jpg"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(239,232,216,0.68)",
            zIndex: 1,
          }}
        />
        <div
          className="container wrap py-4"
          style={{ position: "relative", zIndex: 2 }}
        >
          <div className="text-center mb-5">
            <div className="eyebrow mb-2">
              <span className="idx">02 /</span> What patients say
            </div>
            <h2
              className="section-title"
              style={{ fontSize: "clamp(30px,3.6vw,40px)" }}
            >
              Don't Take Our Word for It
            </h2>
            <p className="lead-muted mt-2 mb-0">
              Here are some reviews from our patients
            </p>
          </div>
          <div className="row g-4">
            {REVIEWS.map((r) => (
              <div key={r.who} className="col-12 col-md-6">
                <div className="review-card">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <img
                      src={r.avatar}
                      alt={r.who}
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: "50%",
                        objectFit: "cover",
                        flexShrink: 0,
                        border: "2px solid var(--border)",
                      }}
                    />
                    <div>
                      <div className="who">{r.who}</div>
                      <Stars />
                    </div>
                  </div>
                  <blockquote style={{ margin: 0 }}>{r.text}</blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-5">
        <div className="container wrap py-4">
          <div className="fnd-card overflow-hidden">
            <div className="row g-0">
              <div className="col-lg-7 p-4 p-lg-5 text-center text-lg-start">
                <div className="eyebrow mb-2">
                  <span className="idx">03 /</span> Come on in
                </div>
                <h2
                  className="section-title mb-3"
                  style={{ fontSize: "clamp(28px,3.4vw,38px)" }}
                >
                  Book a Visit with Dr. Teeth
                </h2>
                <p className="lead-muted mb-4" style={{ maxWidth: 480 }}>
                  Takes about a minute online, or just give us a ring. Either
                  way, Dr. Teeth will sort you out.
                </p>
                <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                  <Link to="/booking" className="btn btn-amber">
                    Book online
                  </Link>
                  <a
                    href="tel:+14165550123"
                    className="btn btn-blue d-inline-flex align-items-center gap-2"
                  >
                    <Icon
                      name="phone"
                      style={{ width: 18, height: 18, display: "inline-flex" }}
                    />
                    Call (416) 555-0123
                  </a>
                </div>
              </div>
              <div className="col-lg-5 p-4 p-lg-5 band-cream d-flex align-items-center">
                <div>
                  <div className="label-cap mb-2">Office hours</div>
                  <p className="mb-3" style={{ fontSize: 18 }}>
                    <strong className="text-blue">Mon–Fri</strong> 9am – 6pm
                    <br />
                    <strong className="text-blue">Saturday</strong> 10am – 4pm
                    <br />
                    <span className="text-muted" style={{ fontSize: 15 }}>
                      Sunday closed
                    </span>
                  </p>
                  <div
                    className="d-flex align-items-start gap-2"
                    style={{ color: "var(--muted)" }}
                  >
                    <Icon
                      name="pin"
                      style={{
                        width: 18,
                        height: 18,
                        display: "inline-flex",
                        color: "var(--blue)",
                        flexShrink: 0,
                        marginTop: 3,
                      }}
                    />
                    <span style={{ fontSize: 15.5 }}>
                      123 Industrial Ave, Downtown Ottawa · Dr. Teeth has been
                      here since 1489
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

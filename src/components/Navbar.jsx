import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className="navbar navbar-expand-lg site-nav sticky-top py-2">
      <div className="container wrap">
        <Link className="navbar-brand wordmark p-0" to="/">
          Dr. Teeth
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul className="navbar-nav align-items-lg-center gap-lg-1 mt-3 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/#services">Services &amp; Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#reviews">Patient Reviews</Link>
            </li>
            <li className="nav-item ms-lg-2">
              <Link
                className="nav-link is-cta"
                to="/booking"
                onClick={() => {
                  const el = document.getElementById('navMenu')
                  if (el && el.classList.contains('show') && window.bootstrap) {
                    window.bootstrap.Collapse.getOrCreateInstance(el).hide()
                  }
                }}
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

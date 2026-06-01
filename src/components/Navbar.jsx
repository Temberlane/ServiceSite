import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand fw-semibold" to="/">ServiceSite</NavLink>

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

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto gap-1">
            {[
              { to: '/', label: 'Home' },
              { to: '/services', label: 'Services' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <li className="nav-item" key={to}>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link${isActive ? ' active' : ''}`
                  }
                  to={to}
                  end={to === '/'}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

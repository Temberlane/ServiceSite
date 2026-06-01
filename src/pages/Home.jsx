import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold mb-3">Professional Services</h1>
          <p className="lead text-secondary mb-4">
            We deliver reliable, high-quality solutions tailored to your needs.
          </p>
          <Link to="/services" className="btn btn-dark btn-lg me-2">
            Our Services
          </Link>
          <Link to="/contact" className="btn btn-outline-secondary btn-lg">
            Get in Touch
          </Link>
        </div>
        <div className="col-lg-6">
          <div className="bg-light rounded-3 p-5 text-center text-secondary">
            Hero image / illustration
          </div>
        </div>
      </div>
    </div>
  )
}

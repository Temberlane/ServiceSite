const services = [
  { title: 'Consulting', description: 'Expert guidance to solve your toughest challenges.' },
  { title: 'Development', description: 'Custom software built to your specifications.' },
  { title: 'Support', description: 'Ongoing maintenance and dedicated support plans.' },
]

export default function Services() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">What We Offer</h2>
      <div className="row g-4">
        {services.map(({ title, description }) => (
          <div className="col-sm-6 col-lg-4" key={title}>
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title fw-semibold">{title}</h5>
                <p className="card-text text-secondary">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

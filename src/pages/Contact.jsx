import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! (wire up your backend here)')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h2 className="fw-bold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-control"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-dark w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

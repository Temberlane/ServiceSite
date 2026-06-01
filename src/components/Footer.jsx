export default function Footer() {
  return (
    <footer className="bg-dark text-secondary py-3 mt-auto">
      <div className="container text-center small">
        &copy; {new Date().getFullYear()} ServiceSite. All rights reserved.
      </div>
    </footer>
  )
}

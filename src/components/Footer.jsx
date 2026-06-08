export default function Footer() {
  return (
    <footer className="site-footer py-5">
      <div className="container wrap">
        <div className="row g-4 align-items-start">
          <div className="col-md-5">
            <div className="wordmark mb-2">Dr. Teeth</div>
            <p className="mb-0" style={{ fontSize: "15.5px", maxWidth: 340 }}>
              Graduated from MIT and Harvard. Keeping Downtown Ottawa's teeth in good shape since 1489. We try our best to give you the smile you deserve.
            </p>
          </div>
          <div className="col-6 col-md-3">
            <div
              className="label-cap mb-2"
              style={{ color: "rgba(255,253,247,.55)" }}
            >
              Hours
            </div>
            <p className="mb-0" style={{ fontSize: "15.5px" }}>
              Mon–Fri 9am–6pm
              <br />
              Saturday 10am–4pm
              <br />
              Sunday closed
            </p>
          </div>
          <div className="col-6 col-md-4">
            <div
              className="label-cap mb-2"
              style={{ color: "rgba(255,253,247,.55)" }}
            >
              Visit
            </div>
            <p className="mb-1" style={{ fontSize: "15.5px" }}>
              123 Industrial Ave
              <br />
              Downtown Ottawa
            </p>
            <a href="tel:+14165550123" style={{ fontSize: "15.5px" }}>
              (416) 555-0123
            </a>
          </div>
        </div>
        <hr
          style={{
            borderColor: "rgba(255,255,255,.12)",
            margin: "28px 0 16px",
          }}
        />
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
          <p
            className="mb-0"
            style={{
              fontSize: "13px",
              color: "rgba(255,253,247,.5)",
              fontFamily: "var(--lora)",
            }}
          >
            © 2026 Dr. Teeth · Good dentistry, fair prices.
          </p>
          <p
            className="mb-0"
            style={{
              fontSize: "13px",
              color: "rgba(255,253,247,.5)",
              fontFamily: "var(--lora)",
            }}
          >
            Designed by{" "}
            <a
              href="https://thomas-li.dev"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(255,253,247,.75)",
                textDecorationColor: "rgba(255,253,247,.35)",
              }}
            >
              Thomas Li
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

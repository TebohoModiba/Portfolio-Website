function Contact() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    // TODO: wire up to EmailJS or Formspree
    console.log("Form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p className="contact-intro">
        Have a project in mind or just want to connect? Reach out via any of
        the channels below or fill in the form.
      </p>

      <div className="contact-details">

        {/* Gmail */}
        <div className="contact-item">
          <span className="contact-label">Email</span>
          <a
            href="mailto:tebohomodiba658@gmail.com"
            className="contact-value"
          >
            tebohomodiba658@gmail.com
          </a>
        </div>

        {/* WhatsApp */}
        <div className="contact-item">
          <span className="contact-label">WhatsApp</span>
          <a
            href="https://wa.me/27660963925"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-value contact-whatsapp"
          >
            +27 66 096 3925
          </a>
        </div>

        {/* Phone */}
        <div className="contact-item">
          <span className="contact-label">Phone</span>
          <a href="tel:0660963925" className="contact-value">
            066 096 3925
          </a>
        </div>

      </div>

      {sent ? (
        <div className="contact-success">
          <p>✓ Message sent! I'll get back to you soon.</p>
        </div>
      ) : (
        <div className="contact-form">
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
          />
          {error && <p className="contact-error">{error}</p>}
          <button className="btn-primary" onClick={handleSubmit}>
            Send Message
          </button>
        </div>
      )}
    </div>
  );
}

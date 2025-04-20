export default function ContactForm() {
  return (
    <div className="form-page">
      <div className="form-container">
        <h2 className="form-title">Contact Us</h2>
        <p className="form-subtext">
          Have a question? Fill out the form and we'll get back to you!
        </p>

        <form className="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="you@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" placeholder="Write your message here..." />
          </div>

          <button type="submit" className="form-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

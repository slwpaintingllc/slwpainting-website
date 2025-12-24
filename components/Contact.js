import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const response = await fetch(
      "https://formspree.io/f/xnjayrnl",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      setSubmitted(true);
      e.target.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <section id="contact">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
          />

          <textarea
            name="message"
            placeholder="Tell us about your project"
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Request Quote"}
          </button>
        </form>
      ) : (
        <p style={{ color: "green", fontWeight: "bold" }}>
          Our team will reach out soon
        </p>
      )}
    </section>
  );
}

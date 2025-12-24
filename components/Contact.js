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

  const inputStyle = {
    width: "100%",
    maxWidth: "500px",
    padding: "12px 15px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    maxWidth: "500px",
    padding: "12px",
    margin: "15px 0",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#0070f3",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
  };

  const formContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px",
  };

  return (
    <section id="contact" style={{ textAlign: "center", padding: "60px 20px" }}>
      {!submitted ? (
        <form onSubmit={handleSubmit} style={formContainer}>
          <input
            style={inputStyle}
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />

          <input
            style={inputStyle}
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

          <input
            style={inputStyle}
            type="tel"
            name="phone"
            placeholder="Phone Number"
          />

          <textarea
            style={{ ...inputStyle, minHeight: "120px" }}
            name="message"
            placeholder="Tell us about your project"
            required
          />

          <button type="submit" disabled={loading} style={buttonStyle}>
            {loading ? "Sending..." : "Request Quote"}
          </button>
        </form>
      ) : (
        <p style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}>
          Our team will reach out soon
        </p>
      )}
    </section>
  );
}


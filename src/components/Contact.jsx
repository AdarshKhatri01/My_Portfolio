import { useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_fknohvc",     // Service ID
        "template_2zmo7df",    // Template ID
        formData,
        "ZU4Q2DaRHFWDYgkWe"    // Public Key
      );

      setFormStatus({ type: "success", message: "Message sent successfully! We'll be in touch soon." });
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        if (document.getElementById("formResponse")) {
          document.getElementById("formResponse").classList.add(styles.fadeOut);
          setTimeout(() => setFormStatus(null), 500);
        }
      }, 8000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const dismissMessage = () => {
    document.getElementById("formResponse").classList.add(styles.fadeOut);
    setTimeout(() => setFormStatus(null), 500);
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.sectionTitle}>Get in Touch</h2>
      <p className={styles.sectionSubtitle}>Have a question or want to work together? Let's make it happen.</p>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={`${styles.formGroup} ${styles.floatingLabel}`}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label htmlFor="name">Your Name</label>
        </div>

        <div className={`${styles.formGroup} ${styles.floatingLabel}`}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label htmlFor="email">Email Address</label>
        </div>

        <div className={`${styles.formGroup} ${styles.floatingLabel}`}>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label htmlFor="message">Your Message</label>
        </div>

        <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {formStatus && (
          <div id="formResponse" className={`${styles.formResponse} ${styles[formStatus.type]}`}>
            {formStatus.message}
            <button
              type="button"
              className={styles.closeButton}
              onClick={dismissMessage}
              aria-label="Dismiss message"
            >
              ×
            </button>
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;

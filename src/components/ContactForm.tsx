import { useState } from "react";
import "../styles/Contact.css";

type ApiResult = { ok: boolean; message: string };

type ThankYouModalProps = {
  open: boolean;
  onClose: () => void;
  userName?: string;
};

const ThankYouModal: React.FC<ThankYouModalProps> = ({
  open,
  onClose,
  userName,
}) => {
  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="thanks-title"
      onClick={onClose}
    >
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        <h3 id="thanks-title" style={{ marginTop: 0 }}>
          Thanks for reaching out{userName ? `, ${userName}` : ""}!
        </h3>
        <p>
          Your message was sent successfully. I’ll get back to you as soon as I
          can.
        </p>
        <button className="btn btn-primary" onClick={onClose} autoFocus>
          Close
        </button>
      </div>
    </div>
  );
};

const ContactForm: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<ApiResult | null>(null);
  const [showThanks, setShowThanks] = useState(false);

  // Tracks what the user is typing in the Name field
  const [nameInput, setNameInput] = useState("");

  // Holds the name we show in the thank-you modal
  const [thankName, setThankName] = useState("");

  const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as
    | string
    | undefined;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    if (!WEB3FORMS_KEY) {
      setResult({ ok: false, message: "Missing Web3Forms access key." });
      setSubmitting(false);
      return;
    }

    data.append("access_key", WEB3FORMS_KEY);
    data.append("from_url", window.location.href);
    data.append("botcheck", "");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        // Save the submitted name for the modal
        setThankName(nameInput);

        setResult({ ok: true, message: "Message sent successfully." });
        setShowThanks(true);

        // Clear the form fields
        form.reset();
        setNameInput("");
      } else {
        setResult({
          ok: false,
          message: json.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setResult({
        ok: false,
        message: "Network error. Please try again in a moment.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <input
          type="checkbox"
          name="botcheck"
          style={{ display: "none" }}
          tabIndex={-1}
        />

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            required
            placeholder="you@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject (optional)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="How can I help?"
          />
        </div>

        <div className="form-consent">
          <input id="consent" name="consent" type="checkbox" required />
          <label htmlFor="consent">
            I consent to having this website store and process my submitted
            information for contact purposes.
          </label>
        </div>

        <button type="submit" disabled={submitting} className="btn btn-primary">
          {submitting ? "Sending…" : "Send Message"}
        </button>

        {result && !result.ok && (
          <p
            role="status"
            aria-live="polite"
            className="form-error"
            style={{ marginTop: 10 }}
          >
            {result.message}
          </p>
        )}
      </form>

      <ThankYouModal
        open={showThanks}
        onClose={() => setShowThanks(false)}
        userName={thankName}
      />
    </>
  );
};

export default ContactForm;

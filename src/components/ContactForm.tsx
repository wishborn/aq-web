"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    smsOptIn: false,
    termsAccepted: false,
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setForm({ ...form, [target.name]: value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.termsAccepted) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        smsOptIn: false,
        termsAccepted: false,
        subject: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-accent mb-1">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="w-full px-3 py-2 border border-gray-medium rounded text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-accent mb-1">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="w-full px-3 py-2 border border-gray-medium rounded text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-accent mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-3 py-2 border border-gray-medium rounded text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-accent mb-1">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full px-3 py-2 border border-gray-medium rounded text-sm"
          />
        </div>
      </div>

      {/* SMS Opt-In */}
      <div>
        <h3 className="text-lg font-bold text-navy mb-2">SMS Opt-In</h3>
        <p className="text-xs text-muted mb-3">
          By providing a telephone number and submitting this form you are
          consenting to be contacted by SMS text message. Message &amp; data
          rates may apply. You can reply STOP to opt-out of further messaging.
        </p>
        <label className="flex items-center gap-2 text-sm text-body">
          <input
            type="checkbox"
            name="smsOptIn"
            checked={form.smsOptIn}
            onChange={handleChange}
            className="rounded"
          />
          Ok to Receive SMS Communication
        </label>
      </div>

      {/* Terms */}
      <label className="flex items-center gap-2 text-sm text-body">
        <input
          type="checkbox"
          name="termsAccepted"
          checked={form.termsAccepted}
          onChange={handleChange}
          required
          className="rounded"
        />
        You accept our Terms of Service (link in footer)
      </label>

      {/* Subject */}
      <div>
        <label className="block text-sm font-semibold text-accent mb-1">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full px-3 py-2 border border-gray-medium rounded text-sm"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-accent mb-1">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          rows={5}
          required
          className="w-full px-3 py-2 border border-gray-medium rounded text-sm resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-accent text-white py-3 px-6 rounded font-bold text-sm uppercase tracking-wider hover:bg-accent-hover transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send"}
      </button>

      {status === "success" && (
        <p className="text-green-700 font-semibold">
          Thank you! Your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 font-semibold">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

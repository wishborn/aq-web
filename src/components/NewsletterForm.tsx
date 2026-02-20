"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Newsletter Signup");
    const body = encodeURIComponent(`Please add me to the Asset Quest newsletter.\n\nEmail: ${email}`);
    window.location.href = `mailto:info@assetquest.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-3 py-2 border border-gray-medium rounded text-sm text-body mb-2"
      />
      <button
        type="submit"
        className="w-full bg-accent text-white py-2 px-4 rounded font-semibold text-sm hover:bg-accent-hover transition-colors"
      >
        Signup
      </button>
      {submitted && (
        <p className="text-green-700 text-xs mt-2">Thank you for your interest!</p>
      )}
      <p className="text-xs text-navy-light mt-2">
        By signing up, you agree to our{" "}
        <a href="/privacy-policy" className="underline">
          Terms of Use outlined in our privacy policy
        </a>
      </p>
    </form>
  );
}

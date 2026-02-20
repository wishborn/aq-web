"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
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
        disabled={status === "loading"}
        className="w-full bg-accent text-white py-2 px-4 rounded font-semibold text-sm hover:bg-accent-hover transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Signing up..." : "Signup"}
      </button>
      {status === "success" && (
        <p className="text-green-700 text-xs mt-2">Thank you for subscribing!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-xs mt-2">Something went wrong. Try again.</p>
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

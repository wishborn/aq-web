"use client";

import { useState } from "react";

export default function QuickContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    country: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/quick-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ firstName: "", lastName: "", company: "", email: "", country: "" });
    } catch {
      setStatus("error");
    }
  }

  const fields = [
    { name: "firstName", placeholder: "First Name", type: "text" },
    { name: "lastName", placeholder: "Last Name", type: "text" },
    { name: "company", placeholder: "Company Name", type: "text" },
    { name: "email", placeholder: "Email", type: "email" },
    { name: "country", placeholder: "Country", type: "text" },
  ] as const;

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      {fields.map((field) => (
        <input
          key={field.name}
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          value={form[field.name]}
          onChange={handleChange}
          required={field.name === "email"}
          className="w-full px-3 py-2 border border-gray-medium rounded text-sm text-body"
        />
      ))}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-accent text-white py-2 px-4 rounded font-semibold text-sm hover:bg-accent-hover transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Submitting..." : "Submit"}
      </button>
      {status === "success" && (
        <p className="text-green-700 text-xs">Thank you! We&apos;ll be in touch.</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-xs">Something went wrong. Try again.</p>
      )}
    </form>
  );
}

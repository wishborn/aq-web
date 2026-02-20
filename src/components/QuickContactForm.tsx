"use client";

import { useState } from "react";

export default function QuickContactForm() {
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Quick contact from ${form.firstName} ${form.lastName}`);
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nCompany: ${form.company || "N/A"}\nEmail: ${form.email}\nCountry: ${form.country || "N/A"}`
    );
    window.location.href = `mailto:info@assetquest.com?subject=${subject}&body=${body}`;
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
        className="w-full bg-accent text-white py-2 px-4 rounded font-semibold text-sm hover:bg-accent-hover transition-colors"
      >
        Submit
      </button>
    </form>
  );
}

import ContactForm from "@/components/ContactForm";
import { Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Header spacer */}
      <div className="h-24 bg-navy" />

      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-navy mb-10">
            Contact us
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form - takes 2 cols */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <p className="text-body">
                2180 West First Street. Ste 301
                <br />
                FT. Myers FL, 33901
              </p>
              <p className="text-body">
                <strong>Office:</strong>{" "}
                <a href="tel:2395418448" className="text-accent hover:underline">
                  (239) 541-8448
                </a>
              </p>
              <div className="flex items-center gap-2">
                <strong className="text-body">Follow us:</strong>
                <a
                  href="https://www.linkedin.com/company/asset-quest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.5!2d-81.88!3d26.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2180+W+First+St+Fort+Myers+FL+33901+USA!5e0!3m2!1sen!2s!4v1626359494475!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Asset Quest Office Location"
        />
      </section>
    </>
  );
}

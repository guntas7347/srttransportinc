"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { FC, ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage("Please fill in all required fields.");
      return;
    }

    const subject = `Quote Request from ${formData.name}`;
    const body = `
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone || "Not provided"}
            
            Message:
            ${formData.message}
        `;

    window.location.href = `mailto:info@srttransportinc.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setStatusMessage("Your email client should now be open. Thank you!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400">
            Ready to discuss your transportation needs? Contact us today!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <MapPin className="h-6 w-6" />
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=2+Carroll+Lane+Brantford+ON+N3T-0G1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-lg font-semibold mb-1">Location</h3>
                <p className="text-gray-400">
                  2 Carroll Lane, Brantford, ON N3T 0G1, Canada
                </p>
              </a>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Phone className="h-6 w-6" />
              </div>
              <a href="tel:+14164559663">
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p className="text-gray-400">+1 (416) 455-9663</p>
              </a>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Mail className="h-6 w-6" />
              </div>
              <a href="mailto:info@srttransportinc.com">
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-gray-400">info@srttransportinc.com</p>
              </a>
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your transportation needs... *"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
              {statusMessage && (
                <p className="text-center text-sm text-gray-400 mt-4">
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

'use client'
import React, { useState } from "react";
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState<string | null>(null); // State to manage the form status (null, Sending..., Success, Error)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Set the status to 'Sending...' when the form is being submitted
    setStatus("Sending...");

    // Create FormData for the request
    const formData = new FormData(e.target as HTMLFormElement);

    try {
      // Perform form submission (e.g., using Web3Forms API)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div>
      <section id="contact" className="contact-section">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h2 className="contact-title">
              CONTACT <span className="highlight">ME</span>
            </h2>
          </div>
          <div className="contact-container">
            {/* Left form */}
            <form
              onSubmit={handleSubmit}
              action="https://api.web3forms.com/submit"
              method="POST"
              className="contact-form"
            >
              <input
                type="hidden"
                name="access_key"
                value="1ef6c8d0-926d-4049-af72-094ff07f6109" // Your Web3Forms access key
              />

              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="contact-inputs"
                required
              />

              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 mt-4"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="contact-inputs"
                required
              />

              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700 mt-4"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                className="contact-inputs h-32"
                required
              ></textarea>

              {/* Show the status message */}
              {status && (
                <div
                  className={`status-message ${
                    status === "Sending..."
                      ? "status-sending"
                      : status.includes("Failed")
                      ? "status-error"
                      : "status-success"
                  }`}
                >
                  {status}
                </div>
              )}

              <button
                type="submit"
                className="submit-btn mx-auto mt-2 "
              >
                Submit
                {/* Optional Icon for Button */}
                <img
                  src="https://img.icons8.com/ios/50/ffffff/arrow.png"
                  alt="Arrow Icon"
                />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

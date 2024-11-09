"use client";
import React, { useState } from "react";

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
      <section id="contact" className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 mt-16 text-black">
              CONTACT <span className="text-cyan-600">ME</span>
            </h2>
          </div>
          <div className="contact-container flex flex-col lg:flex-row">
            {/* Left form */}
            <form
              onSubmit={handleSubmit}
              action="https://api.web3forms.com/submit"
              method="POST"
              className="contact-left w-full lg:w-1/2 mx-auto flex flex-col space-y-4 bg-gray-200 p-6 rounded-2xl shadow-lg"
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
                className="contact-inputs w-full bg-gray-100 rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-2 px-3 mt-2"
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
                className="contact-inputs w-full bg-gray-100 rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-2 px-3 mt-2"
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
                className="contact-inputs w-full bg-gray-100 rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none text-gray-700 py-2 px-3 mt-2 resize-none"
                required
              ></textarea>

              {/* Show the status message */}
              {status && (
                <div
                  className={`mt-4 text-center ${
                    status === "Sending..."
                      ? "text-gray-500"
                      : status.includes("Failed")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {status}
                </div>
              )}

              <button
                type="submit"
                className="hover:scale-110 duration-300 flex items-center justify-center mx-auto text-white bg-cyan-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-700 rounded text-lg mt-6"
              >
                Submit
                {/* Optional Icon for Button */}
                <img
                  src="https://img.icons8.com/ios/50/ffffff/arrow.png"
                  alt="Arrow Icon"
                  className="ml-2 w-5 h-5"
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

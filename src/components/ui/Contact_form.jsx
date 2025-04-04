import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("https://vite.growvance.in/backend/mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        toast.error(result.message || "Failed to send message. Try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Try again later.");
    }

    setIsSending(false);
  };

  return (
    <div className="relative isolate bg-white">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Feel free to reach out to us for any inquiries or assistance.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  First name
                </label>
                <input type="text" id="first-name" name="firstName" onChange={handleChange} value={formData.firstName}
                  className="block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600" required />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Last name
                </label>
                <input type="text" id="last-name" name="lastName" onChange={handleChange} value={formData.lastName}
                  className="block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600" required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <input type="email" id="email" name="email" onChange={handleChange} value={formData.email}
                  className="block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600" required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <textarea id="message" rows={4} name="message" onChange={handleChange} value={formData.message}
                  className="block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600" required></textarea>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button type="submit" disabled={isSending}
                className={`w-max flex items-center gap-2 rounded-2xl border-2 border-[#1f8106] bg-[#067d50] px-5 py-1.5 text-sm font-semibold text-white ${isSending ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-400"}`}>
                {isSending ? (
                  <>
                    <AiOutlineLoading3Quarters className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send message"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
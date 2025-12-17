'use client'
import React, { useState } from 'react';
import SuccessModal from '@/components/custom/successModal/page';

export default function MessageForm() {
  /* ---------- state ---------- */
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ email?: string }>({});
  const [showModal, setShowModal] = useState(false);

  /* ---------- helpers ---------- */
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const inputClass = (hasError?: boolean) =>
    `border-b-2 w-full focus:bg-green-100 px-2 text-fanakaGrey-50 
     outline-none transition-all duration-300
     ${hasError ? 'border-red-500' : 'border-white focus:border-fp'}`;

  /* ---------- handlers ---------- */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /* -- email validation -- */
    if (!validateEmail(form.email)) {
      setErrors({ email: 'Please enter a valid email address.' });
      return;
    }

    /* clear any previous error */
    setErrors({});

    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      setShowModal(true);
      setForm({ name: '', email: '', phone: '', message: '' }); // reset form
    } catch (err) {
      console.error('Error sending email:', err);
      alert('Failed to send message. Please try again later.');
    }
  };

  /* ---------- JSX ---------- */
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p className="text-fp uppercase font-bold text-center md:text-start md:text-4xl text-lg mb-4">
          Get in Touch
        </p>

        <div className="flex flex-col gap-4 w-full h-full text-sm md:text-base">
          {/* Name */}
          <label htmlFor="name" className="text-white">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClass()}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          {/* Email */}
          <label htmlFor="email" className="text-white">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass(!!errors.email)}
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
              /* clear error while typing */
              if (errors.email) setErrors({});
            }}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          {/* Phone */}
          <label htmlFor="phone" className="text-white">Phone number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={inputClass()}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          {/* Message */}
          <label htmlFor="message" className="text-white">Message</label>
          <textarea
            id="message"
            name="message"
            required
            className={inputClass()}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          {/* Submit */}
          <button
            type="submit"
            className="bg-fp text-white rounded-md p-2 hover:bg-white hover:text-fp transition-all duration-300 mb-4 sm:mb-0"
          >
            Send Message
          </button>

          <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </div>
      </form>

      {/* autofill fix */}
      <style jsx>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          transition: background-color 9999s ease-in-out 0s;
          -webkit-text-fill-color: #000 !important;
          box-shadow: 0 0 0px 1000px white inset !important;
          background-color: white !important;
        }
      `}</style>
    </>
  );
}

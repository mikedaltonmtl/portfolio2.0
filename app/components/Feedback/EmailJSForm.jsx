'use client';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function EmailJSForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, }
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-4 p-4 rounded border border-primary max-w-xl"
    >
      <input
        name="name"
        type="text"
        className="basis-10 p-3 font-semibold transition-all shadow rounded border-b-2 border-white hover:border-b-primary/80"
        placeholder="Name"
        required
      />
      <input
        name="email"
        type="email"
        className="basis-10 p-3 font-semibold transition-all shadow rounded border-b-2 border-white hover:border-b-primary/80"
        placeholder="Email"
        required
      />
      <textarea
        name="message"
        className="basis-40 p-3 font-semibold transition-all shadow rounded border-b-2 border-white hover:border-b-primary/80 resize-none"
        placeholder="Message"
        required
      />
      <button
        type="submit"
        className="grow basis-10 shrink px-4 py-2 rounded-md hover:bg-primary/30 bg-primary text-white h-10"
      >
        Send
      </button>
    </form>
  );
}

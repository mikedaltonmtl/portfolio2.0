'use client';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function EmailJSForm() {
  const form = useRef();
  const commonEffects = "p-3 transition-all shadow rounded border-b-2 border-white hover:border-b-primary/80 focus:outline-none focus:border focus:border-primary";


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
      className="flex flex-col gap-4 p-4 rounded border border-primary max-w-xl font-semibold"
    >
      <input
        name="name"
        type="text"
        className={`basis-10 ${commonEffects}`}
        placeholder="Name"
        required
      />
      <input
        name="email"
        type="email"
        className={`basis-10 ${commonEffects}`}
        placeholder="Email"
        required
      />
      <textarea
        name="message"
        className={`basis-40 resize-none ${commonEffects}`}
        placeholder="Message"
        required
      />
      <button
        type="submit"
        className="grow basis-10 px-4 py-2 h-10 w-min rounded-md bg-primary text-white hover:border-primary hover:bg-white hover:text-primary"
      >
        Send
      </button>
    </form>
  );
}

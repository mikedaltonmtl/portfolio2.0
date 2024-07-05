'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './SendButton.module.css';


export default function EmailJSForm() {
  const form = useRef();
  const btn = useRef();
  const [btnText, setBtnText] = useState('Send');

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
          setBtnText("Thanks");
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
      <div className={styles.sendContainer}>
        <button
          type="submit"
          ref={btn}
          className={btnText === "Send" ? "" : styles.active}
        >
          <p>{btnText}</p>
          <div className={styles.checkBox}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>
        </button>
      </div>
    </form>
  );
}

'use client';
import Typed from 'typed.js';
import { useEffect, useRef, useState } from 'react';
import styles from './Splash.module.css';

const phrases = [
  {
    title: "Who is this Mike Dalton?",
    subtitle: "Let's find out, shall we..."
  },
  {
    title: "He's really quite a boring person",
    subtitle: "who actually enjoys testing and debugging"
  },
  {
    title: "He may look a little old",
    subtitle: "but he doesn't half learn fast!"
  },
  {
    title: "Does he really love to code?",
    subtitle: "The answer is 'yes!' especially if he gets to use React"
  },
  {
    title: "Is he passionate about web development, though?",
    subtitle: "Well he keeps on plugging away, gradually figuring things out"
  },
  {
    title: "Can he impliment Responsive Design?",
    subtitle: "See for yourself, try this site on another device or resize your browser"
  },
  {
    title: "They say he's slightly OCD",
    subtitle: "and they'd be right, but that means he keeps it all pixel-perfect"
  },
  {
    title: "Is it true that he doesn't have much of an ego?",
    subtitle: "Well, you try applying for junior positions at his age and still be arrogant"
  },
  {
    title: "Why so few GitHub commits though?",
    subtitle: "The chatbots he's been working with never seem to get round to merging his pull requests"
  },
  {
    title: "What about those Dad jokes, though?",
    subtitle: "You're right, there's just no excuse"
  },
];


export default function Phrases() {
  const textRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [phrases[currentIndex].subtitle],
      typeSpeed: 50,
      backSpeed: 50,
      fadeOut: true,
      fadeOutDelay: 2000,
      showCursor: false,
      onComplete: () => {
        setIsTyping(false);
        setTimeout(() => {
          const textContainer = textRef.current.parentNode;
          textContainer.classList.add(styles.fadeOut);
          setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % phrases.length);
            textContainer.classList.remove(styles.fadeOut);
            textContainer.classList.add(styles.fadeIn);
            setIsTyping(true);
            setTimeout(() => {
              textContainer.classList.remove(styles.fadeIn);
            }, 500);
          }, 500);
        }, 2000);
      },
    });

    return () => {
      typed.destroy();
    };
  }, [currentIndex]);


  return (
    <div className="h-screen w-1/2 flex justify-start items-start">
      <div className={`text-left m-[3vw] max-w-xl ${styles.textContainer}`}>
        <h1 className="text-4xl font-bold text-primary mb-4">{phrases[currentIndex].title}</h1>
        <span ref={textRef} className="text-4xl text-primary align-middle" style={{ whiteSpace: 'pre-wrap' }} />
        <span className={`after:bg-primary ${styles.cursor} ${isTyping ? '' : styles.cursorBlink}`} />
      </div>
    </div>
  );
}

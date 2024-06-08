'use client';
import Typed from 'typed.js';
import { useEffect, useRef, useState } from 'react';
import styles from './Splash.module.css';

const phrases = [
  {
    title: "Boring fella",
    subtitle: "who actually enjoys testing"
  },
  {
    title: "He may be old",
    subtitle: "but he learns fast"
  },
  {
    title: "Slighly OCD",
    subtitle: "keeps it all pixel-perfect"
  },
  {
    title: "Passionate about web development",
    subtitle: "and learning to craft good-looking, functional websites"
  },
  {
    title: "Front-end Technologies",
    subtitle: "Proficient in HTML, CSS, JavaScript, and loves staying up-to-date with the latest front-end trends."
  },
  {
    title: "User Experience Enthusiast",
    subtitle: "Committed to creating intuitive and user-centered designs that enhance the overall digital experience."
  },
  {
    title: "Loves to code",
    subtitle: "proficient in JavaScript, HTML, CSS, and Python."
  },
  {
    title: "Responsive Design Specialist",
    subtitle: " Skilled in crafting responsive layouts that adapt seamlessly to various devices and screen sizes."
  },
  {
    title: "Innovation-Driven",
    subtitle: "Always eager to explore new technologies and implement innovative solutions to problems."
  },
  {
    title: "Detail-Oriented Perfectionist",
    subtitle: "Commited to delivering high-quality work with a keen eye for detail."
  },
  {
    title: "Continuous Learner",
    subtitle: "Embraces lifelong learning and stays updated with the latest industry best practices and trends."
  },
  {
    title: "Creative Problem Solver",
    subtitle: "Approaches challenges with a creative mindset, delivering innovative solutions."
  }
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
      <div className={`text-left m-10 max-w-xl ${styles.textContainer}`}>
        <h1 className="text-4xl font-bold text-primary mb-4">{phrases[currentIndex].title}</h1>
        <span ref={textRef} className="text-4xl text-primary align-middle" style={{ whiteSpace: 'pre-wrap' }} />
        <span className={`after:bg-primary ${styles.cursor} ${isTyping ? '' : styles.cursorBlink}`} />
      </div>
    </div>
  );
}

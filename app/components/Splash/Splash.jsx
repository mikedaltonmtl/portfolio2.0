'use client';
import Typed from 'typed.js';
import { useEffect, useRef, useState } from 'react';
import styles from './Splash.module.css';

const content = [
  {
    title: "Passionate web developer",
    subtitle: "Dedicated to crafting beautiful and functional websites."
  },
  {
    title: "Expert in Front-end Technologies",
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
    title: "Cross-Functional Collaborator",
    subtitle: "Excels at working collaboratively with back-end developers and designers to deliver exceptional results."
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

export default function Splash() {
  const textRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [content[currentIndex].subtitle],
      typeSpeed: 50,
      backSpeed: 50,
      fadeOut: true,
      fadeOutDelay: 2000,
      showCursor: false,
      onComplete: () => {
        setIsTyping(false);
        setTimeout(() => {
          const textContainer = textRef.current.parentNode;
          textContainer.classList.add('styles.fade-out');
          setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % content.length);
            textContainer.classList.remove('styles.fade-out');
            textContainer.classList.add('styles.fade-in');
            setIsTyping(true);
            setTimeout(() => {
              textContainer.classList.remove('styles.fade-in');
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
    <div className="h-screen bg-[#ffffdb] flex justify-start items-start">
      <div className="text-left m-10 max-w-md text-container">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">{content[currentIndex].title}</h1>
        <span ref={textRef} className="text-4xl text-orange-500 align-middle" style={{ whiteSpace: 'pre-wrap' }} />
        <span className={`cursor ${isTyping ? '' : styles.cursorBlink}`} />
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';

import FadeIn from '../comon/FadeIn';
import styles from './Skills.module.css';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.jsB', 'Animation', 'Tailwind CSS'];


export default function Skills() {
  // const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setScrollX(scrollX - 1);
  //   }, 15);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [scrollX]);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  //     setPrefersReducedMotion(mediaQuery.matches);
  //   }
  // }, []);

  return (
    <section className="pt-24 w-full flex pl-[3vw] flex-col">
      <FadeIn threshold={0.8} >
        <h2 className="text-4xl font-bold text-primary mb-5">A few things I&apos;ve learned</h2>
      </FadeIn>

      <div className={styles.scroller}>
        <ul className={styles.innerScroller}>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>Tailwind CSS</li>
          <li>GitHub</li>
          <li>PostgreSQL</li>
        </ul>
      </div>

    </section>
  );
}
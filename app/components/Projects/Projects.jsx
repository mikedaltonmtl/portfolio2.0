'use client';
import { useEffect } from 'react';
import ProjectList from './ProjectList';
import FadeIn from '../comon/FadeIn';


export default function Projects() {
  const handleScroll = () => {
    const stickySection = document.querySelector('.sticky');
    const offSetTop = stickySection.parentElement.offsetTop;
    const scrollSection = stickySection.querySelector('.scroll-section');
    let percentage = ((window.scrollY - offSetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
    scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-[400vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="scroll-section top-0 h-full w-screen will-change-transform flex justify-start items-center gap-x-80 ml-10 pr-[5vw]">
          <div className="h-3/5 mb-4">
            <FadeIn threshold={0.3} >
              <h2 className="text-4xl font-bold text-primary">Some Projects I May Have Worked On</h2>
            </FadeIn>
          </div>
          <ProjectList />
        </div>
      </div>
    </div>

  );
}
'use client';
import Image from 'next/image';
import { useEffect } from 'react';

const projects = [
  {
    id: 1,
    image: "/Ladder.gif",
    title: "Letter Ladder",
    description: "Word Puzzle App: open-source group project with New Idea Machine. TypeScript, Next.js and Tailwind.",
    url: "https://github.com/new-idea-machine/Word-Game-App/",
    width: 898,
    height: 623,
  },
  {
    id: 2,
    image: "/boulder.gif",
    title: "Boulder Bingo",
    description: "A Single Page App, phone-based, bingo card generator for climbers. Next.js, React, Material-UI and Framer-Motion.",
    url: "https://boulderbingo.vercel.app/",
    width: 493,
    height: 547,
  },
  {
    id: 3,
    image: "/DogArt.gif",
    title: "DogArt",
    description: "Photo Gallery to collate pictures of our new puppy. Next 13, Tailwind and CSS with responsive design for phone screens.",
    url: "https://dogart.vercel.app/",
    width: 1378,
    height: 625,
  },
  {
    id: 4,
    image: "/mystery.gif",
    title: "Murder Mystery",
    description: "2D Sprite Animation: Murder Mystery game. Built with JavaScript running on Express Server, adapted from Pizza Legends YouTube tutorial.",
    url: "https://pizza-mystery.netlify.app",
    width: 987,
    height: 554,
  },
  {
    id: 5,
    image: "/HH.gif",
    title: "Happy Helpers",
    description: "Finals, group project: A crowd-sourcing, volunteering app with a focus on building community. Built with Next.js, React, Tailwind, Prisma and PostgreSQL. Includes Google Maps API and Chat Engine integration.",
    url: "https://happy-helpers-static.vercel.app/",
    width: 1752,
    height: 919,
  },
];

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
        <div className="scroll-section absolute top-0 h-full min-w-screen will-change-transform flex justify-between items-center px-[5vw]">
          {projects.map((project) => (
            <Image
              key={project.id}
              src={`/projects${project.image}`}
              alt={project.title}
              width={project.width}
              height={project.height}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                width: 'auto',
                height: '60%',
              }}
              unoptimized
            />
          ))}
        </div>
      </div>
    </div>
  );
}
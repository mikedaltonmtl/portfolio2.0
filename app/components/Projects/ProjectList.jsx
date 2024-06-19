import Image from 'next/image';
import Link from 'next/link';

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


export default function ProjectList() {
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative"
          style={{
            aspectRatio: `${project.width} / ${project.height}`,
            height: '60%',
          }}
        >
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block group"
          >
            <Image
              src={`/projects${project.image}`}
              alt={project.title}
              width={project.width}
              height={project.height}
              className='shadow-2xl border-0 border-primary object-cover object-center group-hover:brightness-[0.25] transition-all duration-300'
              unoptimized
              priority
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500 delay-150 group-hover:translate-y-[-20px]">
              <div className="bg-gray-100 py-8 px-12 rounded-md text-black text-lg font-bold">
                Explore
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

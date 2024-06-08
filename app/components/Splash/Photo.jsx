'use client';
import Image from 'next/image';
import { useState } from 'react';

const LinkItem = function({ href, text, onMouseOver, onMouseOut }) {
  return (
    <a
      href={href}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className="text-primary hover:text-white hover:bg-primary transition ease-out duration-500 px-4 py-2 rounded"
    >
      {text}
    </a>
  );
};

const HeroSection = function() {
  const [image, setImage] = useState('/mikeB.jpeg');
  const [timeoutId, setTimeoutId] = useState(null);
  const linkItems = [
    { href: '#about', text: 'About', image: '/cart1.png' },
    { href: '#experience', text: 'Experience', image: '/cart2.jpeg' },
    { href: '#skills', text: 'Skills', image: '/mikeB.jpeg' },
    { href: '#projects', text: 'Projects', image: '/mikeA.jpg' },
  ];

  const handleMouseOver = (newImage) => {
    if (timeoutId) clearTimeout(timeoutId);
    setTimeoutId(
      setTimeout(() => {
        setImage(newImage);
      }, 200)
    );
  };

  const handleMouseOut = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setTimeoutId(
      setTimeout(() => {
        setImage('/mikeB.jpeg');
      }, 500)
    );
  };

  return (
    <section className="bg-bgLight pt-20 pb-10">
      <div className="container mx-auto flex flex-col items-center">
        <div>
          <div className="w-64 h-64 relative">
            <Image
              src={image}
              alt="Your Name"
              fill
              priority
              placeholder="blur"
              blurDataURL={image}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              className="rounded-full border border-primary shadow-md transition duration-500"
            />
          </div>
        </div>
        <nav className="flex justify-center gap-4 text-lg">
          {linkItems.map((item) => (
            <LinkItem
              key={item.href}
              href={item.href}
              text={item.text}
              onMouseOver={() => handleMouseOver(item.image)}
              onMouseOut={handleMouseOut}
            />
          ))}
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;
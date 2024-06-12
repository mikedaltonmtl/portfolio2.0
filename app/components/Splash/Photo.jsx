'use client';

import Image from 'next/image';
import { useState } from 'react';
import LinkItem from './LinkItem';

export default function Photo() {
  const [image, setImage] = useState('/mikeB.jpeg');
  const [timeoutId, setTimeoutId] = useState(null);
  const linkItems = [
    { href: '#about', text: 'About', image: '/cart1.png', alt: 'A photo of a cart' },
    { href: '#projects', text: 'Projects', image: '/cart2.jpeg', alt: 'A photo of another cart' },
    { href: '#contact', text: 'Contact', image: '/mikeA.jpg', alt: 'A photo of Mike Dalton' },
  ];
  const originalImageAlt = 'A photo of Mike Dalton';

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
    <section className="pt-10 pr-20 w-1/2">
      <div className="flex flex-col items-center">
        <div>
          <div className="w-72 h-72 relative">
            <Image
              src={image}
              alt={linkItems.find(item => item.image === image)?.alt || originalImageAlt}
              fill
              priority
              placeholder="blur"
              blurDataURL={image}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              className="rounded-full border-2 border-primary shadow-md"
            />
          </div>
        </div>
        <nav className="flex justify-center gap-4 text-4xl mt-6">
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
}
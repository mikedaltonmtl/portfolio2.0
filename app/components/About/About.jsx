import Image from 'next/image';
import FadeIn from '../comon/FadeIn';

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-center items-center gap-10 px-[5vw]"
    >
      <div className="w-1/2 max-w-md">
        <FadeIn threshold={0.2} >
          <div className="overflow-hidden w-80 rounded-md border-2 border-primary">
            <Image
              src="/mikeA.jpg"
              alt="about image"
              width={300}
              height={300}
              className="w-full h-full hover:scale-125 transition-transform duration-1000"
            />
          </div>
        </FadeIn>
      </div>
      <div className="w-1/2 max-w-md">
        <FadeIn threshold={0.2} >
          <h2 className="text-4xl font-bold text-primary mb-5">A Little Background...</h2>
        </FadeIn>
        <FadeIn>
          <p className="text-lg text-primary mb-5">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
    necessitatibus laudantium, veniam expedita ea animi placeat quibusdam
    obcaecati accusantium optio.
          </p>
        </FadeIn>
        <FadeIn>
          <p className="text-lg text-primary mb-5">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
    necessitatibus laudantium, veniam expedita ea animi placeat quibusdam
    obcaecati accusantium optio.
          </p>
        </FadeIn>
        <FadeIn>
          <p className="text-lg text-primary">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
    necessitatibus laudantium, veniam expedita ea animi placeat quibusdam
    obcaecati accusantium optio.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
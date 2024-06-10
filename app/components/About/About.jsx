import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-center items-center gap-10"
    >
      <div className="w-1/2 max-w-md">
        <div className="overflow-hidden w-80 rounded-md border-2 border-primary">
          {/* className="md:mb-10 md:mt-0 mt-14 mb-2 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg border border-white overflow-hidden" */}

          <Image
            src="/mikeA.jpg"
            alt="about image"
            width={300}
            height={300}
            className="w-full h-full hover:scale-125 transition-transform duration-1000"
          />
        </div>
      </div>
      <div className="w-1/2 max-w-md">
        <h2 className="text-3xl font-bold text-primary mb-5">About Me</h2>
        <p className="text-lg text-primary mb-5">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
    necessitatibus laudantium, veniam expedita ea animi placeat quibusdam
    obcaecati accusantium optio.
        </p>
        <p className="text-lg text-primary mb-5">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
    necessitatibus laudantium, veniam expedita ea animi placeat quibusdam
    obcaecati accusantium optio.
        </p>
        <p className="text-lg text-primary">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
    necessitatibus laudantium, veniam expedita ea animi placeat quibusdam
    obcaecati accusantium optio.
        </p>
      </div>
    </section>
  );
}
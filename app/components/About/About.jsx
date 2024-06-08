import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center gap-10 px-10 md:px-20 lg:px-30 pt-24 bg-bgLight"
    >
      <div className="w-1/2 max-w-md relative group">
        <div className="relative overflow-hidden rounded-md border-2 border-primary">
          <Image
            src="/mikeA.jpg"
            alt="about image"
            width={300}
            height={300}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
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
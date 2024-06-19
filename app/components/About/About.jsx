import Image from 'next/image';
import FadeIn from '../comon/FadeIn';

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-between items-start gap-20 px-[3vw]"
    >
      <div className="flex-grow-0 mt-4">
        <FadeIn threshold={0.4} >
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
      <div className="flex-grow">
        <FadeIn threshold={0.2} >
          <h2 className="text-4xl font-bold text-primary mb-5">A Little Background...</h2>
        </FadeIn>
        <FadeIn>
          <p className="text-lg text-primary mb-5">
            I was probably nine or ten years old when I cracked my first video game. I&apos;d learned a little
            about programming and managed to find a way to force the game in question to crash.
            Scanning through the code, I quickly found the horribly unjust logic. It was a
            football (soccer) manager simulation where if your bank balance grew too large, there would be crowd
            violence at your next match, coupled with a massive repair bill. The developers were just
            making sure that the cash amount stayed within a range, but the thought that the fans of my beloved,
            well-run team would do such a thing left me aghast!
          </p>
        </FadeIn>
        <FadeIn>
          <p className="text-lg text-primary mb-5">
            With that taken care of, I decided to completely rewrite my favourite games to make them
             perfect - for me! After a couple of weeks, I came to the sombering conclusion that it just
             wasn&apos;t as easy as altering a couple of lines of code and that I was in way over my head.
             It was, however, very easy (and a lot of fun) to keep playing games and altering them when
             things were unfair, too slow, or a bit difficult.
          </p>
        </FadeIn>
        <FadeIn>
          <p className="text-lg text-primary mb-5">
            I didn&apos;t have the opportunity to study programming or computer science at school, so after
             leaving university with an economics degree, I went to work in marketing - at an IT company.
          </p>
        </FadeIn>
        <FadeIn>
          <p className="text-lg text-primary">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
    necessitatibus laudantium, veniam expedita ea animi placeat quibusdam
    obcaecati accusantium optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
    necessitatibus laudantium, veniam expedita ea animi placeat quibusdam
    obcaecati accusantium optio.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
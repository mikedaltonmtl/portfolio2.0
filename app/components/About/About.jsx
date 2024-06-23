import Image from 'next/image';
import FadeIn from '../comon/FadeIn';

const aboutText = [
  "I was probably nine or ten years old when I cracked my first video game. I'd learned a little about programming and managed to find a way to force the game in question to crash. Scanning through the code, I quickly found the horribly unjust logic. It was a football (soccer) manager simulation where if your bank balance grew too large, there would be crowd violence at your next match, coupled with a massive repair bill. The developers were just making sure that the cash amount stayed within a range, but the thought that the fans of my beloved, well-run team would do such a thing left me aghast!",
  "With that taken care of, I decided to completely rewrite my favourite games to make them perfect - for me! After a couple of weeks, I came to the sombering conclusion that it just wasn't as easy as altering a couple of lines of code and that I was in way over my head. It was, however, very easy (and a lot of fun) to keep playing games and altering them when things were unfair, too slow, or a bit difficult.",
  "I didn't have the opportunity to study programming or computer science at school, so after leaving university with an economics degree, I went to work in marketing - at an IT company. Unfortunately, it wasn't possible to move across into coding there, so when I arrived in Canada in the early 2000's, I enrolled in a collegial IT course.",
  "The company I had been placed with for my apprenticeship offered me a job at the end of the course. Everyone seemed happy about this, expect for the government, who refused my application for a work permit. Fortunately, my college also had a small consulting company sharing their workspace, who kindly agreed that I could hang out with them and continue to learn, while I waited for my permanent residence status to be approved.",
  "At this time I was approached by a head-hunter who, having seen my background in economics, offered me a job, work permit, and decent salary at RBC's discount brokerage. And so began my career in finance.",
  "Jumping forward several years, I found myself reconciling large amount of trading and accounting data at NBC Financial. At the time, and maybe still today, any information, no matter what the format or the application, was immediately dumped into Excel before being evaluated. Our group was no exception, and the reports we generated were all Excel-based. Realizing how many of my tasks involved repeting the same process before the start of every trading day, I set about automatating the more labourious ones. It took a while, but as my understanding of Microsoft VBA improved, I succeeded in halving the time it took me to produce my daily reports.",
  "At this point, my boss could have just loaded me up with more reports, but he was smarter than that. One by one, he asked the other members of the team to run their most annoying reports past me, and together we automated the pants off of them! Each day, I couldn't wait to finish my reports and start coding. I was learning more VBA, more about the more obscure financial products that I didn't normally deal with. I was getting to work more closely with the other members of the team, and, in my mind anyway, becoming well-liked as I was making everyone else's lives a little bit easier.",
  "Next up for me was a year in Calgary, looking after our young daughter while my wife completed a fellowship (she had a much more important job than me!). Upon returning to Montreal, we had a second child who had some health struggles, so I decided to stay home with him for a little while until he was ready to go to day-care. All of a sudden, I'd been a stay-at-home Dad for ten years and our third child was about to start school!",
  "Time to get back to work. I knew that coding, not finance, was the way to go, and that there was a new-fangled thing called a Bootcamp I could do to catapult me back in to the job market.",
  "",
];

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-between items-start gap-20 px-[3vw] py-16"
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
      <div className="flex-grow text-lg text-primary pr-[15vw]">
        <FadeIn threshold={0.2} >
          <h2 className="text-4xl font-bold mb-5">A Little Background...</h2>
        </FadeIn>
        {aboutText.map((paragraph, index) => (
          <FadeIn key={index}>
            {index === 3
              ?
              <p>TLDR;</p>
              :
              <p className="mb-5">{paragraph}</p>
            }
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
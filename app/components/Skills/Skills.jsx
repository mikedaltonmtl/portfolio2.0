import FadeIn from '../comon/FadeIn';
import SkillsScroller from './SkillsScroller';


const skillsText = [
  "I appreciate that my knowledge may not run deep, but I believe that passion beats experience in the long term. Having said that, the Bootcamp did give me plenty of hands-on experience building apps with the fundamentals of HTML, CSS and JavaScript. I learned through building, and developed a series of SPAs that had been designed to introduce the prevelant technologies of today.",
  "With Express Server and Node.js at the back-end, I learned to use jQuery and the Bootstrap CSS framework. I studied SQL (which I loved!), relational databases and normalization, using the PostgreSQL database. Then came the big reveal, React.",
  "I guess there's a reson that React 'won', and has become the go-to framework for modern web development. It really was a joy to learn and I quickly came to the conclusion that this was the tool I would like to work with in my career.",
  "I'm currently a member of an open-source project group under the New Idea Machine umbrella. We’re developing a word-game app using React and TypeScript within a Next.js framework, and are currently in the process of deploying with AWS.",
  "I am also working as a freelance developer, training AI chatbots to code. Although I'm new to this, I find this work fascinating, and am enjoying the insight it’s giving me into the domain of AI, as well taking this opportunity to learn Python."
];

export default function Skills() {
  return (
    <section className="pt-24 w-full flex pl-[3vw] flex-col">
      <FadeIn threshold={0.8} >
        <h2 className="text-4xl font-bold text-primary mb-5">A Few Things I&apos;ve Learned</h2>
      </FadeIn>
      <SkillsScroller />
      <article className="max-w-5xl text-lg text-primary pr-[15vw] mt-5">
        {skillsText.map((paragraph, index) => (
          <FadeIn key={index}>
            <p className="mb-5">{paragraph}</p>
          </FadeIn>
        ))}
      </article>
    </section>
  );
}

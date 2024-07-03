import FadeIn from '../comon/FadeIn';
import SkillsScroller from './SkillsScroller';


const skillsText = [
  "The Bootcamp gave me plenty of hands-on experience building apps with the fundamentals of HTML, CSS and JavaScript. We learned through building, and developed a series of apps designed  with the React library. I haven’t used Drupal yet, but would be excited to learn. I appreciate that my knowledge may not run deep, but I believe that passion beats experience in the long term.",

  "I'm currently a member of an open-source project group under the New Idea Machine umbrella. We’re developing a word-game app using React and TypeScript within a Next.js framework, and are currently in the process of deploying with AWS.",

  "I am also working as a freelance developer, training AI chatbots to code for DataAnnotation. Although I'm new to this, I find this work fascinating, and am enjoying the insight it’s giving me into the domain of AI, as well taking this opportunity to learn Python."
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

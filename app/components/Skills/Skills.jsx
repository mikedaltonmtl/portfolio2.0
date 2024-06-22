import FadeIn from '../comon/FadeIn';
import styles from './Skills.module.css';

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React.js',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
  'Material-UI',
  'GitHub',
  'PostgreSQL',
];

export default function Skills() {
  return (
    <section className="pt-24 w-full flex pl-[3vw] flex-col">
      <FadeIn threshold={0.8} >
        <h2 className="text-4xl font-bold text-primary mb-5">A Few Things I&apos;ve Learned</h2>
      </FadeIn>
      <div className={`max-w-[800px] overflow-hidden ${styles.scroller}`}>
        <ul className={`m-0 flex flex-wrap gap-[1rem] list-none ${styles.scrollerInner}`}>
          {[...skills, ...skills].map((skill, index) => (
            <li key={index} className="p-[1rem] text-white bg-primary rounded shadow-lg">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

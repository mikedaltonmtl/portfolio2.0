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

export default function SkillsScroller() {
  return (
    <div className={`max-w-[800px] overflow-hidden ${styles.scroller}`}>
      <ul className={`m-0 flex flex-wrap gap-[1rem] list-none ${styles.scrollerInner}`}>
        {[...skills, ...skills].map((skill, index) => (
          <li key={index} className="p-[1rem] text-white bg-primary rounded shadow-lg">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

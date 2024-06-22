import FadeIn from "../comon/FadeIn";
import EmailJSForm from "./EmailJSForm";


export default function Feedback() {
  return (
    <div className="px-[3vw]">
      <FadeIn threshold={0.8} >
        <h2 className="text-4xl font-bold text-primary mb-5">Pleased to meet you. Let&apos;s connect.</h2>
      </FadeIn>
      <FadeIn threshold={0.6} >
        <EmailJSForm />
      </FadeIn>
    </div>
  );
}

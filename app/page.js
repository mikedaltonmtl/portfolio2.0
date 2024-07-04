import About from "./components/About/About";
import Feedback from "./components/Feedback/Feedback";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Splash from "./components/Splash/Splash";

export default function Home() {
  return (
    <main>
      <Header />
      <Splash />
      <About />
      <Projects />
      <Skills />
      <Feedback />
      <About />
    </main>
  );
}

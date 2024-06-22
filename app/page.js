import About from "./components/About/About";
import Feedback from "./components/Feedback/Feedback";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Splash from "./components/Splash/Splash";

export default function Home() {
  return (
    <main>
      {/* scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40 scroll-smooth */}
      <Header />
      <Splash />
      <About />
      <Projects />
      <Skills />
      <Feedback />
      {/* just to add bulk */}
      <Splash />

    </main>
  );
}

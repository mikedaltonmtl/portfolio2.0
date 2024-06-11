import About from "./components/About/About";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Splash from "./components/Splash/Splash";

export default function Home() {
  return (
    <main>
      {/* scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40 scroll-smooth */}
      <Header />
      <Splash />
      <About />
      <Projects />
      {/* <About /> */}
      <Splash />

    </main>
  );
}

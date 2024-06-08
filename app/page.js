import Header from "./components/Header/Header";
import Splash from "./components/Splash/Splash";

export default function Home() {
  return (
    <main className="min-h-screen bg-bgLight">
      <Header />
      <Splash />
    </main>
  );
}

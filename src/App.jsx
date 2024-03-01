import About from "./componenets/About";
import Header from "./componenets/Header";
import Hero from "./componenets/Hero";
import Portfolio from "./componenets/Portfolio";

function App() {
  return (
    <>
      <Header />
      <main className="bg-stone-900 h-full">
        <Hero />
        <About />
        <Portfolio />
      </main>
    </>
  );
}

export default App;

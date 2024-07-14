import { Shop } from "./components/shop";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Shop/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;

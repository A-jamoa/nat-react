import About from "./components/about/About";
import Contect from "./components/Contact/Contect";
import Feature from "./components/feature/Feature";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/Nav/Nav";
import Stories from "./components/stories/Stories";
import Tours from "./components/tours/Tours";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Header />

        <main className="main">
          <About />
          <Feature />
          <Tours />
          <Stories />
          <Contect />
        </main>
        <Footer />

      </header>
    </div>
  );
}

export default App;

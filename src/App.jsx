import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Timeline from './components/Timeline';

const App = () => (
  <div>
    <Navbar />
    <main className="mt-16">
      <About />
      <Skills />
      <Timeline />
      <Education />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;

import './css/style.css';
import Header from './layout/Header';
import Welcome from './screens/Welcome';
import AboutMe from './screens/AboutMe';
import Projects from './screens/Projects';
import Skills from './screens/Skills';
import Contact from './screens/Contact';
import Footer from './layout/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <AboutMe />
      <Projects/>
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

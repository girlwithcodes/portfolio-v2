import './css/style.css';
import Header from './layout/Header';
import Welcome from './screens/Welcome';
import AboutMe from './screens/AboutMe';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <AboutMe />
    </div>
  );
}

export default App;

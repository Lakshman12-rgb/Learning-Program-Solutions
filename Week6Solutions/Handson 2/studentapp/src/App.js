import './App.css';
import { home } from './components/home';
import { about } from './components/about';
import { contact } from './components/contact';

function App() {
  return (
    <div className="container">
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
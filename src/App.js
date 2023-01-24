import './App.css';
import Main from './components/Main/Main.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import background from './pokemon-grass.jpg';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
      }}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

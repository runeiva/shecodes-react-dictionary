import './App.css';
import Dictionary from "./Dictionary";
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="container">

      <h1>
        Web Dictionary
      </h1>
      <Dictionary/>
      <hr/>
      <Footer />
      </div>
    </div>
  );
}

export default App;

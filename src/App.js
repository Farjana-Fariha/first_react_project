
import './App.css';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Movies from './Components/Movies/Movies';

function App() {
  return (
    <div className = 'main'>
      <Header></Header>
      <Movies/>
      <Footer></Footer>
    </div>
  );
}

export default App;

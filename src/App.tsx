import { BrowserRouter } from 'react-router-dom';
import MenuBar from './components/MenuBar/MenuBar';
import Router from './Router';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <MenuBar />
        <div className="content">
          <Router />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
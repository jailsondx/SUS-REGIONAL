import { BrowserRouter } from 'react-router-dom';
import MenuBar from './components/MenuBar/MenuBar';
import Router from './Router';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <MenuBar />
        <div className="content">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
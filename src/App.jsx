// src/App.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <h1 className="main-title">Welcome to React Router Dom</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      <footer className="footer">
        <p>&copy; 2024 MyApp. All rights reserved.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DrainList from './components/DrainList';
import DrainDetail from './components/DrainDetail';
import './components/DrainStyles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <h1>Drain Adoption Program</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<DrainList />} />
            <Route path="/drains/:id" element={<DrainDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
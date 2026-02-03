import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import CommonLayout from './components/Layout/CommonLayout';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CommonLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </CommonLayout>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import ResidenciesPage from './pages/ResidenciesPage';
import ValuesPage from './pages/ValuesPage';
import ContactPage from './pages/ContactPage';
import CommonLayout from './components/Layout/CommonLayout';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CommonLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/residencies" element={<ResidenciesPage />} />
          <Route path="/values" element={<ValuesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </CommonLayout>
    </BrowserRouter>
  );
}

export default App;
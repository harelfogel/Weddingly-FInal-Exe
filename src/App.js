import Header from './Components/Header/Header'
import LoginForm from './Components/LogInForm/LogInForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './View/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPage />} />
    
    </Routes>
    </BrowserRouter>

  );
}

export default App;

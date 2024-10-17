import './App.css'; // App Styles
import Header from './Header';  // Navbar component
import Intro from './Intro';  // Home page component
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // For routes
import Login from './Login';  // Login page component
import Courses from './Courses';

function App() {
  return (
    <Router>
      <div className="App">
        {/*Rendering Navbar only on conditions*/}
        <HeaderWrapper />

        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<><Intro /> <Courses /></>} />   {/* Home page */}
          <Route path="/login" element={<Login />} />  {/* Login page */}
        </Routes>
      </div>
    </Router>
  );
}

// New component to handle header rendering based on where user is
const HeaderWrapper = () => {
  const location = useLocation();

  return (
    <>
      {/* Render Header only if not on the login page */}
      {location.pathname !== '/login' && <Header />}
    </>
  );
};

export default App;

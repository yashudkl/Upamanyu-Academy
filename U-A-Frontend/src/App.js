import "./App.css"; // App Styles
import Header from "./components/navbar/Header"; // Navbar component
import Intro from "./pages/Home/Intro"; // Home page component
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"; // For routes
import Login from "./pages/Login/Login"; // Login page component
import Courses from "./components/courses/Courses"; //Courses section component
import Signup from "./pages/Signup/Signup"; //Signup page component
import Teachers from "./components/teachers/Teachers"; //Teachers component

function App() {
  return (
    <Router>
      <div className="App">
        {/*Rendering Navbar only on conditions*/}
        <HeaderWrapper />

        {/* Defining routes for different pages */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Intro /> <Courses /> <Teachers />
              </>
            }
          />{" "}
          {/* Home page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/Signup" element={<Signup />} /> {/*Signup Page*/}
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
      {/* Renders Header only if not on the login page and signup page */}
      {location.pathname !== "/login" && location.pathname !== "/Signup" && <Header />}
      
    </>
  );
};

export default App;

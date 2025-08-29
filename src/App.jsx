import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
}

export default App;
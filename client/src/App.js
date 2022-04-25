import "./App.css";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import LogIn from "./components/LogIn";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<NavBar />} />
        <Route exact path="/signIn" element={<SignIn />} />
        <Route exact path="/logIn" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;

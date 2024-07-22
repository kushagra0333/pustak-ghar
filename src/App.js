import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./pages/home"
function App() {
  return (
    <div className="App">
       <Router>
        <Header></Header>
        <div className="main">
          <Routes>
            <Route index path="/" element={<Home />} />
          
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

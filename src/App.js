import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import "./styles/App.scss";
import "./styles/Header.scss";
import Home from "./components/Home";
import "./styles/Home.scss";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
        <Route/>

      </Routes>
    </Router>
  );
}

export default App;

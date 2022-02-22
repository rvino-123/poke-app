import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Generation from "./pages/Generation";
import Pokemon from "./pages/Pokemon";
import NotFound from "./pages/NotFound"


function App() {
  return (
    <Router>
      <div className="container">
      {/* Navbar */}
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/generations/:name' element={<Generation />} />
            <Route path='/pokemon/:name' element={<Pokemon />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </div>

    </Router>
  );
}

export default App;

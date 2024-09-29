import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './layouts/Sidebar';
import Dashboard from './pages/Dashboard';
import Goods from "./pages/Goods";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/goods" element={<Goods/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

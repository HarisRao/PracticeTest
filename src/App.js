import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrendingRepos from "./pages/TrendingRepos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TrendingRepos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

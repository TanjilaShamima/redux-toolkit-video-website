import "./App.css";
import HomePage from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/videos/:videoId" element={<VideoPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

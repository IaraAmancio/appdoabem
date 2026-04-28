
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/feed/feed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/feed/feed";
import Login from "./pages/login/login";
import Cadastro from "./pages/cadastro/cadastro";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

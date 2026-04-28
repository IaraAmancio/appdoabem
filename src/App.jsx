
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/feed/feed";
import Login from "./pages/login/login";
import Cadastro from "./pages/cadastro/cadastro";
import CadastroSolicitacao from './pages/cadastroSolicitacao/cadastroSolicitacao'
import { AuthProvider } from "./context/AuthProvider";


function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="/cadastroSolicitacao" element={<CadastroSolicitacao />}/>
        </Routes>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

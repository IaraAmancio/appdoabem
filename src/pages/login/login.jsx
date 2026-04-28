import s from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useState, useContext} from "react";
import {AuthContext} from "../../context/AuthContext"

export default function Login() {

  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("")
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault()

    try{
      const res = await api.post("/login", {email, senha});
      login(res.data.token)
      alert("Login realizado!")
      navigate("/")
    }catch(erro){
       console.log(erro.response?.data || erro.message)
      alert("Erro ao logar!")
    }
  }
  return (
    <main className={s.loginWrapper}> {/* Wrapper para centralizar verticalmente */}
      <div className={s.loginCard}>
        <header className={s.header}>
          <p className={s.logo}>DoaBem</p>
          <h2>Bem-vindo de volta</h2>
          <span>Acesse sua conta de instituição</span>
        </header>

        <form onSubmit={handleLogin} className={s.form}>
          <div className={s.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <input 
              id="email"
              type="email" 
              placeholder="exemplo@email.com" 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>

          <div className={s.inputGroup}>
            <label htmlFor="senha">Senha</label>
            <input 
              id="senha"
              type="password" 
              placeholder="••••••••" 
              onChange={(e) => setSenha(e.target.value)} 
              required
            />
          </div>

          <button type="submit" className={s.loginBtn}>Entrar</button>
        </form>

        <footer className={s.footer}>
          <p>
            Não tem cadastro? 
            <button type="button" onClick={() => navigate("/cadastro")}>
              Crie uma conta
            </button>
          </p>
        </footer>
      </div>
    </main>
  );
}

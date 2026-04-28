import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import s from "./Feed.module.scss";

export default function Feed() {
  const [solicitacoes, setSolicitacoes] = useState([]);

 // const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // CARREGAR FEED SOLITAÇÕES DE DOAÇÕES
  useEffect(()=>{
    async function carregarFeed(){
      try{
        const res = await api.get("/feed")
        setSolicitacoes(res.data)
      }catch(erro){
        console.log(erro)
        console.log("Erro ao carregar feed!")
      }
    }
    carregarFeed()
  },[])



  function handleLogin() {
   // logout();          // remove token
    navigate("/login"); // redireciona
  }

  return (
    <div className={s.feedContainer}>
    <header className={s.header}>
        <div className={s.logo}>DoaBem</div>
        <nav className={s.nav}>
        <button className={s.btn} onClick={()=>handleLogin()}>Instituição</button>
        </nav>
    </header>
    
    <main className={s.content}>
        {/* Solicitações dos pedidos de doações de Instituições */}
        {solicitacoes.length === 0 ? (
            <p className={s.empty}>Nenhuma solicitação de doação ainda...</p>
          ) : (
            solicitacoes.map((doacao) => (
              <section key={doacao.id}>
                <h1>{doacao.nome}</h1>
              </section>
            ))
          )}
    </main>
    </div>
  );
}

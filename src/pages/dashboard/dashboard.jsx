import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { redirect, useNavigate } from "react-router-dom";
import api from "../../services/api";
import s from "./Dashboard.module.scss";

export default function Dashboard() {
  const [solicitacoes, setSolicitacoes] = useState([]);

  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // CARREGAR FEED SOLITAÇÕES DE DOAÇÕES
  useEffect(()=>{
    async function carregarFeed(){
      try{
        const res = await api.get("/minhas-solicitacoes", {
        headers: {
            Authorization: `Bearer ${token}`
        }
        });

        setSolicitacoes(res.data);
      }catch(erro){
        console.log(erro)
        console.log("Erro ao carregar feed!")
      }
    }
    carregarFeed()
  },[])

 function handleLogout(){
    logout()
    navigate("/feed");
 }

  function handleLogin() {
   // logout();          // remove token
    navigate("/login"); // redireciona
  }

    async function deletarSolicitacao_(id) {
        const token = localStorage.getItem("token");

        try {
            await api.delete(`/solicitacoes/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
            });

            alert("Solicitação excluída!");

            setSolicitacoes((prev) => prev.filter((item) => item.id !== id));

        } catch (erro) {
            console.log(erro.response.data);
            alert("Erro ao excluir solicitação");
        }
    }
  

  return (
    <div className={s.feedContainer}>
    <header className={s.header}>
        <a href="/feed" className={s.logo}>DoaBem</a>
        <nav className={s.nav}>
            {token ? (
                <div className={s.nav}>
                    <button className={s.btn} onClick={() => navigate("/dashboard")}>
                        Dashboard
                    </button>
                    <button className={s.btn} onClick={() => navigate("/cadastroSolicitacao")}>
                        Solicitar Doação
                    </button>    
                    <button className={s.btnExit} onClick={handleLogout}>
                        Sair
                    </button>   
                </div>
                
                ) : (
                <button className={s.btn} onClick={() => navigate("/login")}>
                    Instituição
                </button>
            )}
        </nav>
    </header>
    <main className={s.content}>
        <h2 className={s.feedTitle}>Dashboard</h2>
        
        {solicitacoes.length === 0 ? (
            <div className={s.emptyContainer}>
            <p className={s.empty}>Nenhuma solicitação de doação encontrada no momento.</p>
            </div>
        ) : (
            <div className={s.cardsGrid}>
            {solicitacoes.map((solicitacao) => (
                <article key={solicitacao.id} className={s.card}>
                <div className={s.cardHeader}>
                    <span className={s.statusBadge}>{solicitacao.status}</span>
                    <h3>{solicitacao.item}</h3>
                </div>

                <div className={s.cardBody}>
                    <p className={s.description}>{solicitacao.descricao}</p>
                    <div className={s.info}>
                    <strong>Quantidade:</strong> {solicitacao.quantidade}
                    </div>
                </div>

                <div className={s.cardFooter}>
                    <p className={s.institution}>
                    <span>Instituição:</span> {solicitacao.instituicao_nome}
                    </p>
                    <div className={s.row}>
                        <button
                            className={s.completedBtn}
                            onClick={() => {
                            
                            }}
                            >
                            Recebido
                        </button>
                        <button
                            className={s.removeBtn}
                            onClick={() => deletarSolicitacao_(solicitacao.id)}>
                            Excluir
                        </button>
                    </div>
                </div>
                </article>
            ))}
            </div>
        )}
        </main>
    </div>
  );
}

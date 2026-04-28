import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import s from "./Feed.module.scss";

export default function Feed() {
  const [doacoes, setDoacoes] = useState([]);

 // const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // CARREGAR FEED DOAÇÕES
  useEffect(()=>{
    async function carregarFeed(){
      try{
        const res = await api.get("/feed")
        setDoacoes(res.data)
      }catch(erro){
        console.log(erro)
        console.log("Erro ao carregar feed!")
      }
    }
    carregarFeed()
  },[])



  function handleLogout() {
   // logout();          // remove token
    navigate("/login"); // redireciona
  }

  return (
    <>
      <div className={s.feed}>
        <p className={s.logo}>DoaBem</p>
        <div className={s.gap}>
            <button className={s.btn} onClick={handleLogout}>
            Sou Doador
            </button>
            <button className={s.btn} onClick={handleLogout}>
            Sou Instituição
            </button>            
        </div>

      </div>

        {/* LISTA DE DOACOES */}
        <div className={s.postsContainer}>
          {doacoes.length === 0 ? (
            <p className={s.empty}>Nenhuma doação ainda...</p>
          ) : (
            doacoes.map((doacao) => (
              <section key={doacao.id}>
                <h1>{doacao.nome}</h1>
              </section>
            ))
          )}
        </div>
    </>
  );
}
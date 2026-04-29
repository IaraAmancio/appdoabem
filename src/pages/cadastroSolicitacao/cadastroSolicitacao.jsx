import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import s from "./CadastroSolicitacao.module.scss";

export default function CadastroSolicitacao() {
  const [item, setItem] = useState("");
  const [ descricaoItem, setDescricaoItem] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [categoria, setCategoria] = useState("");
  const navigate = useNavigate();

  async function handleSolicitacao(e) {
    e.preventDefault();
    try {
      // 
      const token = localStorage.getItem("token");

      await api.post(
        "/solicitacoes",
        {
          quantidade,
          item,
          descricao: descricaoItem
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
        alert("Solicitação cadastrada com sucesso!");
        navigate("/feed");
      } catch (error) {
        console.log(error.response.data);
        alert("Erro ao cadastrar solicitação.");
      }
  }

  return (
    <main className={s.wrapper}>
      <div className={s.card}>
        <header className={s.header}>
          <h2>Nova Solicitação</h2>
          <p>Descreva o que sua instituição precisa no momento.</p>
        </header>

        <form onSubmit={handleSolicitacao} className={s.form}>
          <div className={s.inputGroup}>
            <label>Item Necessário</label>
            <input 
              placeholder="Ex: Roupa, Alimento, Móvel..." 
              onChange={(e) => setItem(e.target.value)}
              required 
            />
            <label>Descrição</label>
            <input 
              placeholder="Ex: Estante em bom estado..." 
              onChange={(e) => setDescricaoItem(e.target.value)}
              required 
            />
          </div>

          <div className={s.row}>
            <div className={s.inputGroup}>
              <label>Quantidade</label>
              <input 
                type="number" 
                placeholder="Ex: 10" 
                onChange={(e) => setQuantidade(e.target.value)}
                required 
              />
            </div>

          </div>

          <button type="submit" className={s.submitBtn}>Publicar Pedido</button>
          <button type="button" className={s.cancelBtn} onClick={() => navigate("/feed")}>
            Cancelar
          </button>
        </form>
      </div>
    </main>
  );
}
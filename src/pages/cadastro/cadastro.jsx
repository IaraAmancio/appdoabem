import s from "./Cadastro.module.scss";
import { useNavigate } from "react-router-dom"
import api from "../../services/api";
import { useState } from "react";

export default function Register() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("") 
  const [endereco, setEndereco] = useState("")
  const [quant_abrigados, setQuant_abrigados] = useState("") 
  const navigate = useNavigate()

  async function handleRegister(e){
    e.preventDefault()

    try{
      await api.post("/instituicao", {nome, email, endereco, quant_abrigados, senha})
      alert("Instituição criada, você será redirecionado para a tela de login")
      navigate("/login")
    }catch(error){
       console.log(error)
      alert("Erro ao cadastrar instituição! Tente novamente!")
    }
  }

  return (
    <div className={s.registerContainer}>
      <form onSubmit={handleRegister}>
        <h2>Cadastro de Instituição</h2>
        <input placeholder="Nome" onChange={(e)=>setNome(e.target.value)} />
        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input placeholder="Endereço" onChange={(e)=>setEndereco(e.target.value)} />
        <input placeholder="Quantidade de abrigados" onChange={(e)=>setQuant_abrigados(e.target.value)} />
        <input type="password" placeholder="Senha" onChange={(e)=>setSenha(e.target.value)} />
        <button>Cadastrar</button>
      </form>
    </div>
  );
}
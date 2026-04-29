import s from "./Cadastro.module.scss";
import { useNavigate } from "react-router-dom"
import api from "../../services/api";
import { useState } from "react";

export default function Register() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("") 
  const [endereco, setEndereco] = useState("")
  const [telefone, setTelefone] = useState("") 
  const navigate = useNavigate()

  async function handleRegister(e){
    e.preventDefault()

    try{
      await api.post("/instituicao", {nome, email, endereco, senha, telefone})
      alert("Instituição criada, você será redirecionado para a tela de login")
      navigate("/login")
    }catch(error){
      console.log(error.response.data)
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
        <input placeholder="Telefone" onChange={(e)=>setTelefone(e.target.value)} />
        <input type="password" placeholder="Senha" onChange={(e)=>setSenha(e.target.value)} />
        <button>Cadastrar</button>
      </form>
    </div>
  );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from '../components/HeaderComponent/Header'
import Footer from '../components/FooterComponent/Footer'
import ContentComponent from '../components/ContentComponent/Content'

import './form.css'

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(e) {

    e.preventDefault();

    setErrorMessage("");

    if (
      email.trim() === "" ||
      senha.trim() === ""
    ) {

      setErrorMessage(
        "Preencha todos os campos"
      );

      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

      setErrorMessage(
        "Digite um email válido"
      );

      return;
    }

    if (senha.includes(" ")) {

      setErrorMessage(
        "A senha não pode conter espaços"
      );

      return;
    }

    if (senha.length < 6) {

      setErrorMessage(
        "A senha deve possuir ao menos 6 caracteres"
      );

      return;
    }

    try {

      const response = await fetch(
        `${import.meta.env.BASE_URL}users.json`
      );

      const users = await response.json();

      const userFound = users.find(
        (userData) =>
          userData.user === email &&
          userData.password === senha
      );

      if (userFound) {

        localStorage.setItem(
          "loggedUser",
          JSON.stringify(userFound)
        );

        navigate("/usersection");
      }

      else {

        setErrorMessage(
          "Usuário ou senha incorretos"
        );
      }

    }

    catch (error) {

      console.log(error);

      setErrorMessage(
        "Erro ao realizar login"
      );
    }
  }

  return (

    <div id='mainDiv'>

      <Header />

      <ContentComponent>

        <form
          className='userForms'
          onSubmit={handleLogin}
        >

          <p>
            Atenção, esta página é direcionada apenas ao proprietário do site.
          </p>

          <p>
            Digite seu email:
          </p>

          <input
            type="text"
            id='inputEmail'
            placeholder='digite seu email aqui'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p>
            Digite sua senha:
          </p>

          <input
            type="password"
            id='inputSenha'
            placeholder='digite sua senha aqui'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          {
            errorMessage &&
            (
              <p
                style={{
                  color: "red",
                  marginTop: "1rem",
                  backgroundColor: "transparent",
                }}
              >
                {errorMessage}
              </p>
            )
          }

          <button
            type="submit"
          >
            Entrar
          </button>

        </form>

      </ContentComponent>

      <Footer />

    </div>
  )
}

export default Login
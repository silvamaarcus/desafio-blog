import React from "react";

import Post from "../../Components/Post";

import logo from "../../svg/CodeLab.svg";

function Home() {
  const data_post_1 = "17 de ago, 2024";
  const titulo_post_1 =
    "O que é linguagem de programação? Conheça as principais.";
  const texto_post_1 =
    "Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.";

  const data_post_2 = "12 de jul, 2024";
  const titulo_post_2 =
    "GitHub agora permite fazer login sem precisar de senha.";
  const texto_post_2 =
    "O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.";

  const data_post_3 = "21 de jun, 2024";
  const titulo_post_3 = "Por que os hiperlinks são azuis em sua maioria?";
  const texto_post_3 =
    "Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor.";

  return (
    <>
      <div className="bg-section-search">
        <section className="container flex-center-column">
          <img src={logo} alt="CodeLab" className="logo" />
          <form className="flex mt-6 w-100">
            <div className="btn-search"></div>
            <input type="text" name="search" placeholder="Pesquisar no blog" />
          </form>
        </section>
      </div>

      <section className="container">
        <Post date={data_post_1} title={titulo_post_1} desc={texto_post_1} />
        <Post date={data_post_2} title={titulo_post_2} desc={texto_post_2} />
        <Post date={data_post_3} title={titulo_post_3} desc={texto_post_3} />
      </section>
    </>
  );
}

export default Home;

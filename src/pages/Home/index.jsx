import React from "react";

import logo from "../../svg/CodeLab.svg";

function Home() {
  return (
    <>
      <div className="container flex-center-column">
        <img src={logo} alt="CodeLab" className="logo" />
        <form className="flex mt-6 w-100">
          <div className="btn-search"></div>
          <input type="text" name="search" placeholder="Pesquisar no blog" />
        </form>
      </div>
    </>
  );
}

export default Home;

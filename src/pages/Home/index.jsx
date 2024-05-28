import logo from "../../svg/CodeLab.svg";

function Home() {
  return (
    <>
      <div className="container flex-center-column">
        <img src={logo} alt="CodeLab" className="logo" />
        <input type="text" className="mt-6" />
      </div>
    </>
  );
}

export default Home;

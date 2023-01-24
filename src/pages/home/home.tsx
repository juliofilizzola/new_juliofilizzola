import presentation from "../../jsons/presentation.json";
import Menu from "../../components/menu/menu";
import "./css/index.css";

function Home() {
  return (
    <div className="home">
      <Menu />
      <h1 className="h1">{presentation.title}</h1>
      <div className="text-center">
        <h2 className="h2">{presentation.title}</h2>
        <img
          src="https://avatars.githubusercontent.com/u/65046505?v=4"
          alt="juliofilizzola"
          className="img-thumbnail rounded"
        />
        <div>
          <p className="fw-bold lh-1">{presentation.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

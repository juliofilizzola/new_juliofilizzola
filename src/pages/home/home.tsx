import presentation from "../../jsons/presentation.json";
import Menu from "../menu/menu";
import "./css/index.css";

function Home() {
  return (
    <div className="home">
      <Menu/>
      <h1>{presentation.title}</h1>
      <div>
        <h2>{presentation.title}</h2>
        <div>
          <p>{presentation.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

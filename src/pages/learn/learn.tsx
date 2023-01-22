import React from "react";
import Menu from "../../components/menu/menu";
import Render from "../../components/Render/Render";
import { IlearnItens } from "../../dto/learn.dto";
import learns from "../../jsons/learn.json";

function Learn() {
  const [learnItens, setLearnItens ] = React.useState<IlearnItens[] | []>([]);

  React.useEffect(() => {
    if (learns.projects.length) {
      learns.projects && setLearnItens([...learns.projects]);
    }
  }, []);

  return (
    <>
      <Menu />
      <h1>Estudos constantes</h1>
      <div>
        <p>Aqui está alguns repositorios de estudos</p>
      </div>

      <div>
        {learnItens.length && learnItens.map((value: IlearnItens, index: number) =>
          Render(value, index)
        )}
      </div>
    </>
  );
}

export default Learn;

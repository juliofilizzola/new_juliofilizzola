import React from "react";
import { IlearnItens } from "../../dto/learn.dto";

const Render = (value: IlearnItens, key: number) => {
  return (
    <div className="Project" key={key}>
      <h3 className="h3Project">{value.name}</h3>
      <div className="containerProject">
        <img
          className="img-projects"
          src={require("../../img/" + value.image_src)}
          alt="imagem do projeto"
        />
        <div className="text_Container">
          <p> {value.description}</p>

          <a
            href={value.url_repo}
            className="link_git"
            target="_blank"
            rel="noreferrer"
          >
            Link do Repositorio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Render;

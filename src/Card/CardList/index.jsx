import React from "react";
import trash from "../../assets/trash.png";

const CardList = ({ el, removeTransaction }) => {
  return (
    <div
      className={el.type === "Entrada" ? "cardEntry" : "cardExit"}
    >
      <div>
        <h3 className="descriptionCard">{el.description}</h3>
        <span className="typeCard">{el.type}</span>
      </div>
      <span className="valeuCard">R$ {el.value}</span>
      <img
        onClick={() => removeTransaction(el)}
        className="trash"
        src={trash}
        alt="Lixeira"
      />
    </div>
  );
};

export default CardList;

import noCard from "../assets/NoCard.png";
import CardList from "./CardList";
import "./style.css";

export default function Card({
  transationList,
  filteredTransactions,
  removeTransaction,
}) {
  return (
    <>
      {!transationList.length ? (
        <main className="containerCards">
          <h3 className="noReleases">
            Você ainda não possui nenhum lançamento
          </h3>
          <img
            className="noCard"
            src={noCard}
            alt="Imagem ilustrando transações financeiras"
          />
        </main>
      ) : (
        <main className="containerCards">
          {(filteredTransactions.length > 0 ? filteredTransactions : transationList).map((el, index) => {
            return (
              <CardList key={index} el={el} removeTransaction={removeTransaction}></CardList>
            );
          })}
        </main>
      )}
    </>
  );
}

import "./style.css"

export default function HeaderList({setFilter}) {
    return (
        <>
            <header className="headerList">
                <h3 className="title">Resumo financeiro</h3>
                <div className="containerButtons">
                    <button onClick={() => setFilter("Todos")} className="buttonAll">Todos</button>
                    <button onClick={() => setFilter("Entrada")} className="buttonEntry">Entradas</button>
                    <button onClick={() => setFilter("Saida")} className="buttonExit">Despesas</button>
                </div>
            </header>
        </>
    )
}
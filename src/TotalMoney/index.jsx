import "./style.css"

export default function TotalMoney({transationList}){
    return (
        <aside className="containerTotalValue">
            <div className="divTotalValue">
                <h3 className="textTotalValue">Valor total:</h3>
                <span className="numberTotalValue">$ {transationList.reduce((current, previus) => {
                    return current + previus.value
                }, 0)}</span>
            </div>
            <p className="note">O valor se refere ao saldo</p>
        </aside>
    )
}
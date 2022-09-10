import "./style.css"

export default function HeaderHomePage({setIsStartPage}){
    return (
        <header className="headerHomePage">
            <div className="logotipo">
              <span className="Nu">Nu </span>
              <span className="Kenzie">Kenzie</span>
            </div>
            <button className="buttonStartHomePage" onClick={() => setIsStartPage(true)}>Inicio</button>
          </header>
    )
}
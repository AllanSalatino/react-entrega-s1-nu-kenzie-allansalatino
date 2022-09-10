import "./mediaQueryMin768.css"
import "./mediaQueryMax768.css"
import imgStartPage from "../assets/imgStartPage.png"

export default function StartPage({setIsStartPage}){
    let windowWidth = window.innerWidth
    return(
        <main className="container">
            <section className="info">
                <div className="logotipo">
                    <span className="spanNu">Nu </span>
                    <span className="spanKenzie">Kenzie</span>
                </div>
                <h1 className="slogan">Centralize o controle das suas finanças</h1>
                <p className="complement">de forma rápida e segura</p>
                <button className="buttonStart" onClick={() => setIsStartPage(false)}>Iniciar</button>
            </section>
            {windowWidth < 768 ?
                <></>
                :
                <aside>
                    <img src={imgStartPage} alt="Representação de entrada e saida financeira." />
                </aside>
            }
        </main>
    )
}
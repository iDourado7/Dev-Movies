import { Link } from "react-router-dom"
import { FooterContainer } from "./styles"

export default function Footer() {
    const anoAtual = new Date().getFullYear()

    return (
        <FooterContainer>
            <div className="footer-content">
                
                <div className="footer-col">
                    <h4>Dev-Filmes</h4>
                    <p>Desenvolvido por Matheus Pires Brito.</p>
                </div>

                <div className="footer-col-2">
                    <h4>Navegação</h4>
                    <div className="links-row">
                        <Link to="/">Home</Link>
                        <span>|</span>
                        <Link to="/filmes">Filmes</Link>
                        <span>|</span>
                        <Link to="/series">Séries</Link>
                    </div>
                </div>

                <div className="footer-col-2">
                    <h4>Links</h4>
                    <div className="links-row">
                    <a href="https://github.com/iDourado7" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <span>|</span>
                    <a href="https://linkedin.com/in/matheuspires27/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© {anoAtual} Projeto Dev-Filmes. Todos os direitos reservados.</p>
            </div>
        </FooterContainer>
    )
}
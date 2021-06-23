import { Link } from 'react-router-dom'
import { createContext } from'react'
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import Button from '../components/Button';

import '../styles/auth.scss';

export function NewRoom() {
    const value = useContext(TestContext);

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando pergunta e respostas" />
                <strong>Crie sala de Q&A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <h1>{ value }</h1>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova Sala</h2>
                    <form>
                        <input 
                            type="text"
                            placeholder="Digite o código de sala"
                            
                            />
                        <Button type="submit">
                            Criar Sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}

import { useHistory} from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import Button from '../components/Button';


import '../styles/auth.scss';

import { useAuth } from '../hooks/useAuth';

export function Home() {

    const history = useHistory();
    const { user, signWithGoogle } = useAuth();


    async function handleCreateRoom(){
        if(!user) {
            await signWithGoogle();
        }

        history.push('/rooms/new')
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando pergunta e respostas" />
                <strong>Crie sala de Q&A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="logo do google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form>
                        <input 
                            type="text"
                            placeholder="Digite o código de sala"
                            
                            />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}
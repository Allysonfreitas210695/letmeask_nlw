import { useHistory } from 'react-router';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { Button } from '../components/Button';

import '../styles/auth.scss';
import { useAuth } from '../hooks/UseAuth';

export function Home(){
  const history = useHistory();
  const {user, signInWithGoogle} = useAuth();

  async function handleCreateRoom(){
    if(!user){
     await signInWithGoogle(); 
    }
    history.push('/rooms/new')
  }

  return(
    <div id="page-auth">

      <aside>
        <img src={illustrationImg} alt="foto da home de apresentação"/>
        <strong>Crie Salas de Q&amp;A ao vivo</strong>
        <p>Tire as duvidas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className="main-container">
          <img src={logoImg} alt="letmeask"/>
          <button onClick={handleCreateRoom}  className="create-room">
            <img src={googleIconImg} alt="Logo do google"/>
            Crie sua sala com o google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input 
              type="text" 
              placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na Sala
            </Button>
          </form>
        </div>
      </main>

    </div>
  )
}
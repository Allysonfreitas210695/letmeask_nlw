import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';

export function Home(){
  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="foto da home de apresentação"/>
        <strong>Crie Salas de Q&amp;A ao vivo</strong>
        <p>Tire as duvidas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div>
          <img src={logoImg} alt="letmeask"/>
          <button>
            <img src={googleIconImg} alt="Logo do google"/>
            Crie sua sala com o google
          </button>
          <div>ou entre em uma sala</div>
          <form >
            <input 
              type="text" 
              placeholder="Digite o código da sala"
            />
            <button type="submit">
              Entrar na Sala
            </button>
          </form>
        </div>
      </main>

    </div>
  )
}
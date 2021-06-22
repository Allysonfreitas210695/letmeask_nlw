import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../App';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import '../styles/auth.scss';

export function NewRoom(){
  const {user} = useContext(AuthContext);
  
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
          <h1>{user?.name}</h1>
          <h2>Criar uma nova Sala</h2>
          <form>
            <input 
              type="text" 
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar Sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? 
            <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>

    </div>
  )
}
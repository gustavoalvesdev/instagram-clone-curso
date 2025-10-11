import './App.css';
import { db } from './firebase_config.js';
import { useEffect, useState } from 'react';

function App() {

    const [user, setUser] = useState('Gustavo')

    useEffect(() => {
      
    }, [])

  return (
    <div className="App">
      <div className="header">
        <div className="center">
          <div className='header__logo'>
            <a href="https://instagram.com"><img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' alt="Logo isntagram" /></a>
          </div>
          {
            (user)?
            <div>
              Olá Gustavo
            </div>
            :
            <div className='header__loginForm'>
              <form>
                <input type="text" placeholder="Login..." />
                <input type="password" placeholder="Senha..." />
                <input type="submit" name="acao" value="Entrar" />
              </form>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;

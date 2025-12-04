import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header.js';

function App() {

    const [user, setUser] = useState('Gustavo')

    useEffect(() => {
      
    }, [])

  return (
    <div className="App">
      <Header user={user} />
    </div>
  );
}

export default App;

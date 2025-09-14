import './App.css';
import { db } from './firebase_config.js';
import { useEffect } from 'react';

function App() {

    useEffect(() => {
      console.log(db);
    }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

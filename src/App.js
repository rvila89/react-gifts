import { useState } from 'react'
import './App.css';
import ListOfGifs from './components/ListOfGifs';

function App() {
  const [keyword, setKeyWord] = useState('messi')
  return (
    <div className="App">
      <section className="App-header">
        <button onClick={() => setKeyWord('matrix')}>Cambiar keyword</button>
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  );
}

export default App;

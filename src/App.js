import { useState } from 'react'
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  const [keyword, setKeyWord] = useState('messi')
  return (
    <Router>
      <div className="App">
        <section className="App-header">
          <h1>App</h1>
          <Link to="/gif/matrix">Matrix</Link>
          <Link to="/gif/starwars">Star Wars</Link>
          <Switch>
            <Route path="/gif/:keyword" component={ListOfGifs}/>
          </Switch>
        </section>
      </div>
    </Router>
    
  );
}

export default App;

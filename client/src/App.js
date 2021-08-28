import './App.css';
import Home from './components/pages/Home';
import Project from './components/pages/Project'
import { BrowserRouter as Router, Route  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/">
    <div className="App">
      <Home></Home>
        </div>
      </Route>
      <Route exact path="/projects">
        <Project> </Project>
      </Route>
    </Router>
  );
}

export default App;

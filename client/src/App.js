import './App.css';
import './styles.css'
import './index.css'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Project from './components/pages/Project'
import Layout from './components/Layout';
import 'semantic-ui-css/semantic.min.css'
import background from './images/explorersunset.jpg'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div
      style={{
      backgroundImage: 'url('+background+')',
        backgroundSize: "cover",
        minHeight:"100vh",
        backgroundPosition:"bottom"
    }}
>

      <Router>
        <Switch>
          <Layout>
      <Route exact path="/" component={Home}>

      </Route>
      <Route exact path="/projects" component={Project}>
        
      </Route>
      <Route exact path="/contact" component={Contact}>
     
      </Route>
      <Route exact path="/about" component={About}>
          </Route>
          </Layout>
          </Switch>
          </Router>
      </div>
  );
}

export default App;

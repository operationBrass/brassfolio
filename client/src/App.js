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
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';


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
      <BrowserRouter basename="/brassfolio">
      <Router>
        <Switch>
          <Layout>
      <Route path="/brassfolio" component={Home}>

      </Route>
      <Route path="/projects" component={Project}>  
      </Route>
      <Route path="/contact" component={Contact}>
     
      </Route>
      <Route path="/about" component={About}>
          </Route>
          </Layout>
          </Switch>
      </Router>
</BrowserRouter>
      </div>
  );
}

export default App;

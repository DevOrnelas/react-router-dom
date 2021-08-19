import './App.css';
import {BrowserRouter, NavLink, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import List from './components/List';
import About from './components/About';
import Pricing from './components/Pricing';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/team" component={List} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/:postID" component={List} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

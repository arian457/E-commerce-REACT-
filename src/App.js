
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/PAGES/Home';
function App() {
  return (
    <>
      <Router>
        
      <Nav />
      <Switch>
        <Route path ="/" exact component={Home} />
      </Switch>
    </Router>
    </>
  );
}

export default App;

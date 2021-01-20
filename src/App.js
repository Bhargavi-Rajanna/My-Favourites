import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Header from './components/header/Header'
import Landing from './components/landing/Landing';
import Favourites from './components/favourites/Favourites';

function App() {
  return (
  <Router>
    <div className="App">
        <Header/>
        <Route path="/" exact component={Landing}/>
        <Route path="/favourites" exact component={Favourites}/>
    </div>
    </Router>
  );
}

export default App;

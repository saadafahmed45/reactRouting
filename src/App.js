import './App.css';
// import Header from './Component/Heder.js/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import About from './Component/About/About';
import PostDetails from './Component/PostDetails/PostDetails';

function App() {
  
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li><li>
            <Link to="/saadaf">saadaf</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            {/* <Dashboard /> */}
          </Route>
          <Router path="/saadaf">
          </Router>

          <Route path="/post/:id">
        <PostDetails></PostDetails>
          </Route>

        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;

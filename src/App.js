import React from 'react';
import './App.css';
import {BrowserRouter as Routes, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/About' component={About}/>
        </Switch>
      </Routes>
    </div>
  );
}

export default App;

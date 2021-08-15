import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home  from './pages/Home';
import css from './Style/Global.css'


function App() {
  return (
    < div className="app">
      <BrowserRouter>      
        <Switch>
        <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

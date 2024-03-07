import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/login" component={LoginPage} />
        {/* Define more routes as needed */}
      </Switch>
    </div>
  );
}

export default App;

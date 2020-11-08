import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Homepage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import Header from './Components/Header/Header.component';
import Sign from './Pages/Signin-and-singup-page/Sign';
function App() {
  return (
    <div>
      <Header/>
      <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={Sign}/>
      </Switch>
    </div>
  );
}

export default App;

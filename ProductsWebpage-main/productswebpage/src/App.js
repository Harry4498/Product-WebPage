// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
 import Products from './components/Products/Products';
 import FooterTop from './components/Footer/FooterTop';
 import FooterMiddle from './components/Footer/FooterMiddle';
 import FooterBottom from './components/Footer/FooterBottom';
//  import {createContext} from 'react'
//  import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  // let  [cartCount, setCartCount] = React.useState(0);
  // const CartContext = createContext()
  return (
    // <CartContext.Provider value={cartCount}>
    <Provider store={store} >
    <div className="App">
      
      <Header />
      
      <Main />
      <Products />
      <FooterTop />
      <FooterMiddle />
      <FooterBottom /> 
    </div>
    </Provider>
    
  );
}

export default App;

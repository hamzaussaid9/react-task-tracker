import React from 'react';
import Header from './components/header/Header';
import Products from './pages/products/Products';


function App() {
  return (
    <>
    <Header heading="My Products" />
    <Products />
    </>
  );
}

export default App;

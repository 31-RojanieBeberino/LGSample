import React from 'react';
import ProductComponent from '../Html/Home/product';
import Pnav from '../Html/Digitour/Pnav'


export default function Products() {
  return (
  <div className="productMainContainer">
    <Pnav />

    <ProductComponent />
  </div>
  );
}

import React from 'react';
import Vnav from '../Html/Digitour/Vnav';
import CarouselComponent from '../Html/Digitour/heroComponent/CarouselComponent';
import Products from '../pages/Products';

export default function Vlanding() {
  return (
    <div className='VlandingMAin'>
      <Vnav />

      <Products />

      <CarouselComponent />
    </div>
  );
}

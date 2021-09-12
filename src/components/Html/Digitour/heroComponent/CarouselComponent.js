import React from 'react';
import ListCarousel from './listCarousel';
import { SliderData } from './SliderData';

const CarouselComponent = () => {
  return (
    <div>
      <ListCarousel slides={SliderData} />
      <div className='chatIcon'>
        <img src='/assets/img/icons/chatIcon.svg' alt='' />
      </div>
    </div>
  );
};

export default CarouselComponent;

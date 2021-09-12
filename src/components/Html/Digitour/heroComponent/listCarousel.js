import React, { useState, useEffect } from 'react';
import Video from './Video';

const ListComponent = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const slide = slides.filter(d => d.index === current)[0];
  const slidesRight = slides.slice(current + 1, current + 4);
  const [newSlide, setNewSlide] = useState(slide);
  // const SliderAni = document.querySelector('.postCard');
  // const BarAni = document.querySelector('.hr2');

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setNewSlide(slides.filter(d => d.index === current)[0]);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setNewSlide(slides.filter(d => d.index === current)[0]);
  };

  useEffect(() => {
    const SliderAni = document.querySelector('.postCard');
    SliderAni.classList.add('smoothLeftRight');
    console.log('useeffect works!');
  }, [current]);

  useEffect(() => {
    const BarAni = document.querySelector('.hr2');
    if (current <= 3) {
      BarAni.classList.add('barAnim1');
    } else if (current > 3 && current <= 7) {
      BarAni.classList.add('barAnim2');
    } else if (current > 7 && current <= 11) {
      BarAni.classList.add('barAnim3');
    } else {
      BarAni.classList.add('barAnim4');
    }
    console.log('bar is works');
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  const handleClick = () => {
    const ShowVirtual = document.querySelector('.VlandingMAin');
    const enav = document.querySelector('.Enav');

    ShowVirtual.classList.add('active');
    enav.classList.add('EnavActive');
  };

  return (
    <div className='CarouselContainer'>
      <div className='rightList'>
        <div className='listDetials'>
          <span>LG’s Virtual Showrooms</span>
          <br />
          <h1>{slide.title}</h1>
          <br></br>
          <p>{slide.description}</p>
          <button onClick={handleClick} className='btnStyle listCar'>
            <span className='btnName'>Explore Space</span>
            <img src='/assets/img/icons/chevron-right.svg' alt='' />
          </button>
        </div>
      </div>
      <div className='postMainContainer'>
        <div className='postCarousel'>
          <div id='reload' className='postInner'>
            {slidesRight.map(s => {
              return (
                <div
                  className='postCard smoothLeftRight'
                  style={{ backgroundImage: s.image }}
                  key={s.id}
                  id={s.call}
                >
                  <div className='overFlowPostCard'></div>
                  <button id='num' className='number'>
                    {s.id}
                  </button>
                  <div className='postNum'>
                    <span className='status'>New</span>
                  </div>
                  <h1 className='PostTitle'>{s.title}</h1>
                </div>
              );
            })}
          </div>

          <div className='btnCarousel-bar'>
            <div className='btnCarousel'>
              <button className='leftChevon' onClick={prevSlide}>
                <img src='/assets/img/icons/chevron-left.svg' alt='left' />
              </button>
              <button className='rightChevon' onClick={nextSlide}>
                <img src='/assets/img/icons/chevron-right.svg' alt='left' />
              </button>
            </div>
            <div className='carouselBar'>
              <hr className='hr1' />
              <hr className='hr2' />
            </div>
            <div className='carouselNumber'>
              <span className='postNumber'>{slide.id}</span>
            </div>
          </div>
        </div>
      </div>
      <Video url={current === 1 ? slide.video : newSlide.video} />
    </div>
  );
};

export default ListComponent;

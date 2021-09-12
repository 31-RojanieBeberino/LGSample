import React from 'react';





const Vnav = () => {

  const showPages = () =>{
    const product = document.querySelector('.productMainContainer');
    const carousel = document.querySelector('.CarouselContainer');
    const popUpListMain = document.querySelector('.popUpListMain');
    const vnav = document.querySelector('.vnav');
    const vlangdingVidbg = document.querySelector('.VlangdingVidbg');
    const chatIcon = document.querySelector('.chatIcon');

    product.classList.add('productActive');
    carousel.classList.add('active');
    vnav.classList.add('active');
    chatIcon.classList.add('active');
    popUpListMain.classList.remove('productListShow');
    vlangdingVidbg.classList.add('VlandingVidbgActive');

  }
  const showExplore = () =>{
    // const vLanding = document.querySelector('.VlandingMAin');
    const product = document.querySelector('.productMainContainer');
    const carousel = document.querySelector('.CarouselContainer');
    const popUpListMain = document.querySelector('.popUpListMain');
    const vlangdingVidbg = document.querySelector('.VlangdingVidbg');
    const chatIcon = document.querySelector('.chatIcon');

    product.classList.remove('productActive');
    carousel.classList.add('active');
    chatIcon.classList.remove('active');
    popUpListMain.classList.add('productListShow');
    vlangdingVidbg.classList.add('VlandingVidbgActive');


    // vLanding.classList.add('active');
    // enav.classList.add('EnavActive');

}
const showSpaces = () =>{
  const product = document.querySelector('.productMainContainer');
  const carousel = document.querySelector('.CarouselContainer');
  const vnav = document.querySelector('.vnav');
  const popUpListMain = document.querySelector('.popUpListMain');

  product.classList.remove('productActive');
  carousel.classList.remove('active');
  vnav.classList.remove('active');
  popUpListMain.classList.remove('productListShow');
}



  const menu = [
    {
      index: 1,
      list: <button onClick={showSpaces} className="spaces" >Spaces</button>,
    },
    {
      index: 2,
      list: <button onClick={showPages} className="product" >Product</button>,
    },
    {
      index: 3,
      list: <button onClick={showExplore} className="explore" >Explore</button>,
    },
  ];

  return (
    <div className='navMenu vnav'>
      <div className='mainLogo'>
        <ul className='Logo'>
          <li>LG DigiTour</li>
        </ul>
      </div>
      <div className='menuList vnavList'>
        <ul>
          {menu.map(l => {
            return <li key={l.index}>{l.list}</li>;
          })}
        </ul>
      </div>
      <div className='burgerMenu vnavIcons'>
        <img src='/assets/img/icons/INlogo.png' alt='logo' />
        <img src='/assets/img/icons/tweetLogo.png' alt='logo' />
      </div>
    </div>
  );
};

export default Vnav;

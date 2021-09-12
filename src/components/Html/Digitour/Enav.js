import React from 'react';


export default function Enav() {
    const showProduct = () =>{
      const ShowVirtual = document.querySelector('.VlandingMAin');
      const product = document.querySelector('.productMainContainer');
      const carousel = document.querySelector('.CarouselContainer');
      const popUpListMain = document.querySelector('.popUpListMain');
      const vnav = document.querySelector('.vnav');
      const chatIcon = document.querySelector('.chatIcon');

      product.classList.add('productActive');
      ShowVirtual.classList.remove('active');
      carousel.classList.add('active');
      vnav.classList.add('active');
      chatIcon.classList.remove('active');
      popUpListMain.classList.remove('productListShow');
    }
      const showSpaces = () =>{
        const ShowVirtual = document.querySelector('.VlandingMAin');
        const product = document.querySelector('.productMainContainer');
        const carousel = document.querySelector('.CarouselContainer');
        const enav = document.querySelector('.Enav');
        const vnav = document.querySelector('.vnav');
        const vlangdingVidbg = document.querySelector('.VlangdingVidbg');
        const chatIcon = document.querySelector('.chatIcon');

        product.classList.remove('productActive');
        carousel.classList.remove('active');
        vnav.classList.remove('active');
        ShowVirtual.classList.remove('active');
        enav.classList.add('active');
        chatIcon.classList.remove('active');
        vlangdingVidbg.classList.remove('VlandingVidbgActive');
      }

      const showExplore = () =>{
        const product = document.querySelector('.productMainContainer');
        const carousel = document.querySelector('.CarouselContainer');
        const popUpListMain = document.querySelector('.popUpListMain');
        const vnav = document.querySelector('.vnav');
        const chatIcon = document.querySelector('.chatIcon');

        product.classList.remove('productActive');
        carousel.classList.add('active');
        popUpListMain.classList.add('productListShow');
        vnav.classList.remove('active');
        chatIcon.classList.remove('active');
      }
    
      const menu = [
        {
          index: 1,
          list: <button onClick={showSpaces} className="spaces" >Spaces</button>,
        },
        {
          index: 2,
          list: <button onClick={showProduct} className="product" >Product</button>,
        },
        {
          index: 3,
          list: <button onClick={showExplore} className="explore" >Explore</button>,
        },
      ];


  return (
  <div>
    <div className='navMenu productPageMenu Enav'>
      <div className="productMenuInner">
      <div className='mainLogo'>
        <ul className='Logo'>
          <li>LG DigiTour</li>
        </ul>
      </div>
      <div className='menuList productMenuList'>
        <ul>
          {menu.map( (l) => {
            return <li key={l.index}>{l.list}</li>;
          })}
        </ul>
      </div>
      <div className='burgerMenu'>
        <img src='/assets/img/icons/INlogo.png' alt='logo' />
        <img src='/assets/img/icons/tweetLogo.png' alt='logo' />
      </div>
      </div>
    </div>
  </div>
  );
}

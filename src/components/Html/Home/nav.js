import React from 'react';

const menu = [
  {
    index: 1,
    list: 'Spaces',
  },
  {
    index: 2,
    list: 'Products',
  },
  {
    index: 3,
    list: 'Explore',
  },
];

const Nav = () => {
  return (
    <div className='navMenu'>
      <div className='mainLogo'>
        <ul className='Logo'>
          <li>LG DigiTour</li>
        </ul>
      </div>
      <div className='menuList'>
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
  );
};

export default Nav;

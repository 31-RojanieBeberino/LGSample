import React from 'react';
import Nav from '../Html/Home/nav';
import Footer from '../Html/Home/footer';





interface LaunchProps {
  Launch: () => void;
}

export const LaunchView: React.FC<LaunchProps> = (props: LaunchProps) => {

   return (
    
      <div>
       <Nav /> 
       <div className='mainHero'>
      <div className='heroContent'>
        <div className='heroText'>
          <span className='heroSubTitleHead'>LG’s Virtual Showrooms</span>
          <span className='heroTitle'>Continued Innovation</span>
          <span className='heroSubTitleBot'>
            Virtually experience LG's technology in unique vertical spaces.
          </span>
          <button className="btnStyle" onClick={() => props.Launch()}>
            <span className="btnName">Experience</span>
            <img src='/assets/img/icons/chevron-right.svg' alt=""/>
          </button>
        </div>
      </div>
    </div>
      <Footer />
      </div>
      
    
  );
};

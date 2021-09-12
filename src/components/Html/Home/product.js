import React from 'react';



const Product = () => {
  const HoverBg = () => {
    const productSample1 = document.querySelector('.productSample');
    
    productSample1.classList.add('btnHoverBg');
  }
  const HoverBg2 = () => {
    const secChild = document.querySelector('.secChild');

    secChild.classList.add('btnHoverBg');
  }
  const HoverBg3 = () => {
    const thirdChild = document.querySelector('.thirdChild');
    
    thirdChild.classList.add('btnHoverBg');
  }
  const HoverBg4 = () => {
    const fthChild = document.querySelector('.fthChild');

    fthChild.classList.add('btnHoverBg');
  }
  const OffHoverBg = () => {
    const productSample1 = document.querySelector('.productSample');
    
    productSample1.classList.remove('btnHoverBg');
  }
  const OffHoverBg2 = () => {
    const secChild = document.querySelector('.secChild');
 
    secChild.classList.remove('btnHoverBg');
  }
  const OffHoverBg3 = () => {
    const thirdChild = document.querySelector('.thirdChild');

    thirdChild.classList.remove('btnHoverBg');
  }
  const OffHoverBg4 = () => {
    const fthChild = document.querySelector('.fthChild');
    
    fthChild.classList.remove('btnHoverBg');
  }

  return(
    <div className="productMain">
      <div className="productContent">
        <div className="productHeader">
          <div className="productHeaderContent">
            <div className="productTitle">
              <span>Products for<br/> all your spaces</span>
            </div>
            <div className="productParagraph">
              <span>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productContent2">
        <div className="productHeader">
          <div className="productMenuBar">
          <span className="productTop" >Results Displayed (35)</span>
            <div className="productType">
              <span className="productTypeTitle" >Category</span>
              <div className="productList">
                  <img 
                    src="/assets/img/icons/Check.svg"
                    alt="check"
                  />
                  <span >Commercials Displays</span>
              </div>
              <div className="productList">
                  <img 
                    src="/assets/img/icons/Check.svg"
                    alt="check"
                  />
                  <span >Computer Monitors</span>
              </div>
            </div>
            <div className="productType">
              <span className="productTypeTitle" >Type</span>
              <div className="productList">
                  <img 
                    src="/assets/img/icons/arrowRight.svg"
                    alt="check"
                  />
                  <span >All</span>
              </div>
              <div className="productListMenu">
                  <span >Commercial TVs</span><br />
                  <span >Digital Signage</span><br />
                  <span >Direct View LED Signage</span>
              </div>
            </div>
            <div className="productType">
              <span className="productTypeTitle hide">Type</span>
              <div className="productListMenu">
                  <span >Hopitality TVs</span><br/>
                  <span >Outdoor Displays</span><br/>
                  <span >Monitor & TV Accessories</span><br/>
                  <span >OLED Displays</span>
              </div>
            </div>
            <div className="productType">
            <span className="productTypeTitle hide">Type</span>
            <div className="productListMenu">
                  <span >Video Walls</span><br/>
                  <span >FHD Monitors</span><br/>
                  <span >UHD 4K Monitors</span><br/>
                  <span >5K Monitors</span>
              </div>
            </div>
            <div className="productType">
                <span className="productTypeTitle hide">Type</span>
                <div className="productListMenu">
                  <span >UltraWide Monitors</span><br/>
                  <span >UltraWide Curved Monitors</span><br/>
                  <span >UltraGear Gamiling Monitors</span><br/>
                  <span >UltraFine Monitors</span>
              </div>
            </div>
            <div className="productType">
            <span className="productTypeTitle hide">Type</span>
            <div className="productListMenu">
                  <span >TAA Compliant Monitors </span><br/>
                  <span >Ergo Monitors</span><br/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="AllProducts">
        <div className="productContents">
          <span className="productTitle">All displays & Monitors</span>
          <div className="productItems">
            <div className="productSample">
              <div className="productOverlay">
                <button className="productDisplayBtn">DISPLAY</button>
                <div className="productItemDetail">
                  <hr className="redLine productLine" />
                  <span className="productSeries" >LAEB Series</span>
                  <span className="productName" >136” All-in-One LED</span>
                </div>
              </div>
              <div className="productHoverMenu">
                <div className="productHoverInner">
                  <button onMouseEnter={HoverBg} onMouseLeave={OffHoverBg} className="productHoverBtn">View in Continued Innovation <div className="arrowHoverBtn"></div></button>
                  <button className="productHoverBtn">View in Next-Gen Control Room <div className="arrowHoverBtn"></div></button>
                  <button className="productHoverBtn">View in Corporate Solutions <div className="arrowHoverBtn"></div></button>
                  <span className="viewProduct">View Product Details</span>
                </div>
              </div>
            </div>
            <div className="productSample secChild">
              <div className="productOverlay">
              <button className="productDisplayBtn">DISPLAY</button>
                <div className="productItemDetail">
                  <hr className="redLine productLine" />
                  <span className="productSeries" >65UH7F-B</span>
                  <span className="productName" >136” All-in-One LED Screen</span>
                </div>
              </div>
              <div className="productHoverMenu">
                <div className="productHoverInner">
                  <button onMouseEnter={HoverBg2} onMouseLeave={OffHoverBg2} className="productHoverBtn">View in Continued Innovation <div className="arrowHoverBtn"></div></button>
                  <button className="productHoverBtn">View in Next-Gen Control Room <div className="arrowHoverBtn"></div></button>
                  <button className="productHoverBtn">View in Corporate Solutions <div className="arrowHoverBtn"></div></button>
                  <span className="viewProduct">View Product Details</span>
                </div>
              </div>
            </div>
            <div className="productSample thirdChild">
              <button className="productDisplayBtn">DISPLAY</button>
              <div className="productOverlay">
                <div className="productItemDetail">
                  <hr className="redLine productLine" />
                  <span className="productSeries" >LAEB Series</span>
                  <span className="productName" >136” All-in-One LED</span>
                </div>
              </div>
              <div className="productHoverMenu">
                <div className="productHoverInner">
                  <button onMouseEnter={HoverBg3} onMouseLeave={OffHoverBg3} className="productHoverBtn">View in Continued Innovation <div className="arrowHoverBtn"></div></button>
                  <button className="productHoverBtn">View in Next-Gen Control Room <div className="arrowHoverBtn"></div></button>
                  <button className="productHoverBtn">View in Corporate Solutions <div className="arrowHoverBtn"></div></button>
                  <span className="viewProduct">View Product Details</span>
                </div>
              </div>
            </div>
            <div className="productSample fthChild">
              <button className="productDisplayBtn">DISPLAY</button>
              <div className="productOverlay">
                <div className="productItemDetail">
                  <hr className="redLine productLine" />
                  <span className="productSeries" >LAEB Series</span>
                  <span className="productName" >136” All-in-One LED</span>
                </div>
              </div>
              <div className="productHoverMenu">
                <div className="productHoverInner">
                  <button onMouseEnter={HoverBg4} onMouseLeave={OffHoverBg4} className="productHoverBtn">View in Continued Innovation <div className="arrowHoverBtn"></div></button>
                  <button className="productHoverBtn">View in Next-Gen Control Room <div className="arrowHoverBtn"></div></button>
                  <button className="productHoverBtn">View in Corporate Solutions <div className="arrowHoverBtn"></div></button>
                  <span className="viewProduct">View Product Details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;
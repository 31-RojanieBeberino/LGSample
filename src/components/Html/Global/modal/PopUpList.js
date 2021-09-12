import React from 'react';

const PopUpItems = [
    {
        item: 'Continued Innovation',
        index: 1,
        number: '01'
    },
    {
        item: 'Next-Gen Control Room',
        index: 2,
        number: '02'
    },
    {
        item: 'Redefining Learning Spaces',
        index: 3,
        number: '03'
    },
    {
        item: 'Corporate Solutions',
        index: 4,
        number: '04'
    },
    {
        item: 'Continued Innovation',
        index: 5,
        number: '05'
    },
];

const PopupList = () =>{

  const closeListCont = () =>{
    document.querySelector('.popUpListMain').classList.remove('productListShow');
    document.querySelector('.VlandingMAin').classList.add('active');
    document.querySelector('.Enav').classList.add('EnavActive');
  }

  return(
      <div className="popUpListMain">
        <div className="PopUpContent">
        <button onClick={closeListCont} className="closeListBtn"></button>
          <span className="listName">SPACES GROUP 1</span>
          <hr className="PopupLine"/>
          <div className="ListItems">
            <ul>
              {
                PopUpItems.map( (i) => {
                  return(
                    <li key={i.index} className="listItem"><span className="listNumber">{i.number}</span>{i.item}</li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
  );
}

export default PopupList;
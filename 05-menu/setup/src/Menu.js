import React from 'react';

const Menu = ({ menu }) => {
  return (
    <div className="section-center">
      {menu.map((eachMenu) => {
        const { id, title, price, desc, img } = eachMenu;
        return (<article className='menu-item' key={id}>
          <img className="photo" src={img} alt={title}/>
          <div className="item-info">
            <header>
              <h4>{title}</h4>
              <h4>{price}</h4>
            </header>
            <p className="item-text">{desc}</p>
          </div>
        </article>);
      })}
    </div>
  );
};

export default Menu;

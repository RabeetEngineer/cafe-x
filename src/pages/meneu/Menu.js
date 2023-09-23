import React from "react";
import { menu } from "../../Data";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="container">
        <h1>Menu</h1>
        <div className="row mt-5">
          {menu.map((category) => (
            <div className="col-lg-4 col-md-3 col-sm-12">
              <Link to={`/menu/${category.category.toLowerCase().replace(/\s+/g, '-')}`}>
                <img src={category.img} alt="" />
                <p className="mt-3">{category.category}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;

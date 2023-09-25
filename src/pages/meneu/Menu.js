import React from "react";
import { menu } from "../../Data";
import { Link } from "react-router-dom";
import '../../components/Navbar.css'

const Menu = () => {
  return (
    <>
      <div className="container">
        <h1 className="mt-5 text-center">Menu</h1>
        <div className="row mt-5">
          {menu.map((category) => (
            <div className="col-lg-4 col-md-3 col-sm-12 text-center">
              <Link className="anchor-null" to={`/menu/${category.category.toLowerCase().replace(/\s+/g, '-')}`}>
                <img src={category.img} alt="" />
                <h5 className="mt-3">{category.category}</h5>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;

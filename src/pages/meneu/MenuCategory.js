import React from "react";
import { useParams } from "react-router-dom";
import { menu } from "../../Data";

const MenuCategory = () => {
  const { category } = useParams();
  function convertToSlug(text) {
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  }
  // Find the category object in the menu data that matches the URL parameter
  const selectedCategory = menu.find(
    (menuCategory) => convertToSlug(menuCategory.category) === category
  );

  // Check if the category was found, and if so, retrieve its products
  const categoryProducts = selectedCategory ? selectedCategory.products : [];
  console.log(categoryProducts);

  return (
    <>
      <div className="container">
        <h2>{category}</h2>
        <div className="row mt-5">
          {categoryProducts.map((asianFood, index) => (
            <div className="col-lg-4 col-md-4 col-sm-12" key={index}>
              {/* Add an onError handler to display a placeholder image */}
              <img
              src={asianFood.image}
              alt={asianFood.title}
              onError={(e) => {
                console.log(e.target.src);
              }}
            />
              <p>{asianFood.title}</p>
              <p>{asianFood.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuCategory;
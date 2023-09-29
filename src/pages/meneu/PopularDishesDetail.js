import React from "react";
import { useParams } from "react-router-dom";
import { popularDishes } from "../../Data";
import { useState, useEffect } from "react";

const PopularDishesDetail = () => {
  const { id } = useParams();

  // State to store the product details
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        // Attempt to find the product using the id parameter
        const selectedProduct = popularDishes.find(
          (dishes) => dishes.id.toString() === id
        );
        // Log the selected product to see if it's found
        console.log("Selected Product:", selectedProduct);

        if (selectedProduct) {
          // If the product is found in the Populars, set it in the state
          setProduct(selectedProduct);
        } else {
          // If the product is not found, you can handle it accordingly
          console.error("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProductById();
  }, [id]);
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          {product ? (
            <>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                <img src={product.img} alt="" style={{ width: "100%" }} />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h2>{product.title}</h2>
                <p style={{ textAlign: "justify" }}>{product.desc}</p>
                <h2 className="mt-5">Rs.{product.price}</h2>
                <div class="input-group mb-3 mt-5">
                  <label class="input-group-text" for="inputGroupSelect01">
                    Meat Type
                  </label>
                  <select class="form-select" id="inputGroupSelect01">
                    <option selected>Chicken</option>
                    <option value="Beaf">Beaf</option>
                    <option value="Mutton">Mutton</option>
                    <option value="Fish">Fish</option>
                  </select>
                </div>
                <div className="btn-quant d-flex mt-5">
                  <div class="form-outline me-5" style={{ width: "12%" }}>
                    <input
                      min="1"
                      max="10"
                      type="number"
                      id="typeNumber"
                      class="form-control"
                    />
                  </div>

                  <div className="mb-5">
                    <a href="">
                      <button className="btn btn-dark">
                        <i
                          class="fa fa-shopping-cart me-3"
                          style={{ fontSize: "20px" }}
                        ></i>
                        Add to Cart
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default PopularDishesDetail;

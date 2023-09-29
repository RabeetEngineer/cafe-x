import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { menu } from "../../Data";

const ProductDetail = () => {
  const { id } = useParams();

  // State to store the selected product
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        // Attempt to find the product using the id parameter
        const product = menu
          .map((category) => category.products)
          .flat() // Flatten the array of products
          .find((item) => item.id.toString() === id);

        if (product) {
          // If the product is found in the menu data, set it in the state
          setSelectedProduct(product);
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

  const selectedTypes = selectedProduct ? selectedProduct.type : [];

  const selectOptions = selectedTypes.map((type) => (
    <option key={type} value={type}>
      {type}
    </option>
  ));

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          {selectedProduct ? (
            <>
              {/* Display selected product details */}
              <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                <img
                  src={selectedProduct.image}
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h2>{selectedProduct.title}</h2>
                <p style={{ textAlign: "justify" }}>{selectedProduct.desc}</p>
                <h2 className="mt-5">Rs.{selectedProduct.price}</h2>
                {/* Add your additional product details here */}
                <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Options
              </label>
              <select className="form-select" id="inputGroupSelect01">
                <option value="">Choose...</option>
                {selectOptions}
              </select>
            </div>

            <div className="btn-quant d-flex mt-5" >
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
              <i class="fa fa-shopping-cart me-3" style={{fontSize:"20px"}} ></i>
              Add to Cart</button>
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

export default ProductDetail;

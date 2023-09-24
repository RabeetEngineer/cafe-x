import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { menu } from "../../Data"; // Import your data source

const ProductDetail = () => {
  const { id } = useParams();

  // State to store the product details
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductById = async () => {
      try {

        // Attempt to find the product using the id parameter
        const selectedProduct = menu
          .map((category) => category.products)
          .flat() // Flatten the array of products
          .find((item) => item.id.toString() === id);

        // Log the selected product to see if it's found
        console.log("Selected Product:", selectedProduct);

        if (selectedProduct) {
          // If the product is found in the menu data, set it in the state
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
    <div className="container">
      <h2>{product.title}</h2>
      {product ? (
        <div>
          <img src={product.image} alt={product.title} />
        
          <p>Price: {product.price}</p>
          {/* Add more product details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;

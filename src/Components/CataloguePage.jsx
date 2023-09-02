
import { useState } from "react"
import products from "./assets/products.json"
const CataloguePage = () => {
  const [product]=useState(products)
  const [cart, setCart] = useState([]); // State to store cart items

  const addToCart = (product) => {
        const updatedCart = [...cart];
        const existingCartItem = updatedCart.find((item) => item.id === product.id);
    
        if (existingCartItem) {
          existingCartItem.quantity += 1;
        } else {
          updatedCart.push({ ...product, quantity: 1 });
        }
    
        setCart(updatedCart);
      };
  console.log(cart)
  return (
    <div>
      {product.map((ele)=>{
        return (
          <div key={ele.id}>
          <h1>{ele.name}</h1>
          <img src={ele.image}/>
          <p>{ele.weight}</p>
          <p>{ele.price}</p>
          <button onClick={() => addToCart(ele)}>Add to Cart</button>
          </div>
        )
      })}
    </div>
  )
}

export default CataloguePage





// import React, { useState } from 'react';
// // import pp from "./assets/products.json"

// function CataloguePage() {
//   const [products, setProducts] = useState([]); // State to store products
//   const [cart, setCart] = useState([]); // State to store cart items

//   // Function to fetch products from the JSON file
//   const fetchProducts = async () => {
//     try {
//       const response = await fetch('./assets/products.json');
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   // Function to handle adding a product to the cart
//   const addToCart = (product) => {
//     const updatedCart = [...cart];
//     const existingCartItem = updatedCart.find((item) => item.id === product.id);

//     if (existingCartItem) {
//       existingCartItem.quantity += 1;
//     } else {
//       updatedCart.push({ ...product, quantity: 1 });
//     }

//     setCart(updatedCart);
//   };
//   console.log(products)

//   // Render products and "Add to cart" button
//   const renderProducts = () => {
//     return products.map((product) => (
//       <div key={product.id}>
//         <h3>{product.name}</h3>
//         <img src={`./assets/${product.image}`} alt={product.name} />
//         <p>Weight: {product.weight}</p>
//         <p>Price: ${product.price}</p>
//         <button onClick={() => addToCart(product)}>Add to Cart</button>
//       </div>
//     ));
//   };

//   return (
//     <div>
//       {/* <h1>Catalogue Page</h1> */}
//       <div>{renderProducts()}</div>
//     </div>
//   );
// }

// export default CataloguePage;

import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './images/img1.jpg';
import img2 from './images/img12.webp';
import img3 from './images/img6.jpg';
import img4 from './images/img17.webp';
import img5 from './images/img3.jpg';
import img6 from './images/img9.jpg';
import img7 from './images/img8.jpg';
import img8 from './images/img2.jpg';
import Banner from "./components/Banner";
import 'react-bootstrap'
import "./App.css";





const ProductList = ({ products, addToCart, removeFromCart }) => {
  return (
    
    
    <div id="product-list">
      

      <ul id='item-list'>
        {products.map((product) => (
          <p key={product.id} id="product-item">
            <img src={product.image} alt={product.name} className="img-fluid" id="img-item"/><br/><br />
            <h3><strong>{product.description}</strong></h3>
            <p>{product.Pricing}</p>
            {product.inCart ? (
              <button className="btnItem" onClick={() => removeFromCart(product.id)}>
                Remove from Cart
              </button>
            ) : (
              <button className="btnItem" onClick={() => addToCart(product.id)}>
                Add to Cart
              </button>
            )}
          </p>
        ))}
         
      </ul>
     
    </div>
  );
};

const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <div id="shopping-cart">
      <h2>
        <i className="fas fa-shopping-cart"></i> Shopping Cart
      </h2>
      <ul>
        {cart.map((cartItem) => (
          <li key={cartItem.id}>
            <span>{cartItem.name}</span>
            
            <button onClick={() => removeFromCart(cartItem.id)}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
};




const App = () => {
  const [products, setProducts] = useState([
    { id: 1,name:'product 1', Pricing: "$40.00 - $80.00",image:img1, description: "Sale Item", inCart: false },
    { id: 2,name:'product 2', Pricing: "$20.00 - $18.00",image:img2, description: "Special Item", inCart: false },
    { id: 3,name:'product 3', Pricing: "$50.00 - $25.00",image:img3, description: "Sale Item", inCart: false },
    { id: 4,name:'product 4', Pricing: "$40.00",image:img4, description: "Popular Item", inCart: false },
    { id: 5,name:'product 5', Pricing: "$50.00 - $25.00",image:img5, description: "Sale Item", inCart: false },
    { id: 6,name:'product 6', Pricing: "$120.00 - $280.00",image:img6, description: "Sale Item", inCart: false },
    { id: 7,name:'product 7', Pricing: "$20.00 - $18.00",image:img7, description: "Special Item", inCart: false },
    { id: 8,name:'product 8', Pricing: "$40.00",image:img8, description: "Popular Item", inCart: false },
    // Add more products as needed
  ]);

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCart = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, inCart: true } : product
    );
    setProducts(updatedProducts);

    const selectedProduct = products.find((product) => product.id === productId);
    setCart([...cart, selectedProduct]);
    setCartItemCount(cartItemCount + 1);
  };

  const removeFromCart = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, inCart: false } : product
    );
    setProducts(updatedProducts);

    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    setCartItemCount(cartItemCount - 1);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
     
      <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav-item">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><h1><strong>Shopping Cart</strong></h1></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown link
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#"><h4>All Products</h4></a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#"><h4>Popular Items</h4></a></li>
              <li><a class="dropdown-item" href="#"><h4>New Arrivals</h4></a></li>
            </ul>
          </li>
          <button id="cart-btn">
        <i className="fas fa-shopping-cart" onClick={toggleCart}>
          CART
          <span className="badge rounded-pill bg-dark">{cartItemCount}</span>
        </i>
        {isCartOpen && <ShoppingCart cart={cart} removeFromCart={removeFromCart} />}
      </button>
        </ul>
      </div>

    </div>
    
  </nav>
  <Banner/>
      <div className="cart-container">
      
    </div>
    
      
      <ProductList products={products} addToCart={addToCart} removeFromCart={removeFromCart} />
      
    </div>
  );
};


export default App;
import React, { useState, useEffect, useCallback } from "react";
import classes from '../components/css/Cart.module.css'
import Card2 from "./Card2";

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCartItemsHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://meal-api-63e7e-default-rtdb.firebaseio.com/cartItems.json"
      );
      if (!response.ok) {
        throw new Error("Something Went Wrong In cart Page..!..?");
      }

      const data = await response.json();
      const loadingData = [];
      for (const key in data) {
        loadingData.push({
          id: key,
          idMeal: data[key].idMeal,
          mealCost: data[key].mealCost,
          strMeal: data[key].strMeal,
          strMealThumb: data[key].strMealThumb,
          total: data[key].total,
        });
      }
      setCartItems(loadingData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  });

  useEffect(() => {
    fetchCartItemsHandler();
  }, []);

  
   let content = <p>Cart Items Not Found .</p>;
   if (isLoading) {
     content = (
       <center>
         <h2>Loading...</h2>
       </center>
     );
   }
  if (cartItems.length > 0) {
    content = <Card2 items={cartItems} />;
    props.count(cartItems.length);
   }
   if (error) {
     content = <p>{error}</p>;
   }
  
  var totalAmount = 0;

  const alertHandler = () => {
      alert('Order Successfull..!')
   };

  return (
    <div>
      {content}
      <div className={classes.orderBoxContainer}>
        <div className={classes.orderBox}>
          {cartItems.map((item) => {
            totalAmount = totalAmount + item.total * item.mealCost;
            return (
              <h5>
                {item.strMeal} --> Cost : {item.mealCost}-->total= ₹
                {item.total * item.mealCost}
              </h5>
            );
          })}
          <h4>Total Cost = ₹ {totalAmount} </h4>
          <button
            onClick={alertHandler}
            type="button"
            class="btn btn-outline-success btn-lg"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import classes from "../components/css/Card.module.css";

const Card1 = (props) => {
  const [error, setError] = useState(null);

  const addToCartHandler = async (item) => {
    try {
      const response = await fetch(
        "https://meal-api-63e7e-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("something went wrong in posting");
      }
    } catch (error) {
      setError(error.message);
    }
    alert('added to cart successfull..!')
  };

  return (
    <div className={classes.container}>
      {props.items.map((item) => {
        return (
          <div>
            <Card style={{ width: "18rem", boxShadow: "1px 2px 3px gray" }}>
              <Card.Img
                style={{ height: "200", width: "250" }}
                variant="top"
                src={item.strMealThumb}
              />
              <div style={{ textAlign: "center", marginTop: "15px" }}>
                <Card.Title>{item.strMeal}</Card.Title>
                <Card.Title> ₹{item.mealCost}</Card.Title>
              </div>
              <div>
                <button
                  onClick={addToCartHandler.bind(null, item)}
                  className="btn btn-primary"
                >
                  Add to cart
                </button>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Card1;

import React, {useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import classes from "../components/css/Card.module.css";

const Card1 = (props) => {
  const [error, setError] = useState(null);
  const [error1, setError1] = useState(null);
  const [count, setCount] = useState(1);
  
  const decrementHandler = (item) => {
    if (item.total <= 1) {
       alert('Not Possible To Decrese The Qty')
    }
    else {
      item.total--;
      setCount(item.total);
      updataHandler(item);
    }
  };

  const incrementHandler = (item) => {
    item.total++;
    setCount(item.total);
    updataHandler(item);
  };

  const updataHandler = async (item) => {
    var transformedData = {
      idMeal: item.idMeal,
      mealCost: item.mealCost,
      strMeal: item.strMeal,
      strMealThumb: item.strMealThumb,
      total:item.total,
    };
    try {
      const response = await fetch(
        `https://meal-api-63e7e-default-rtdb.firebaseio.com/cartItems/${item.id}.json`,
        {
          method: "PUT",
          body: JSON.stringify(transformedData),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Max-Age": "*",
          },
        }
      );
      if (!response.ok) {
        console.log(response.status);
        throw new Error("something went wrong");
      }
    } catch (error) {
      setError(error.message);
    }
    setCount(item.total)
    window.location.reload()
  };


  const deleteHandler = async (item) => {
    try {
      const response = await fetch(`https://meal-api-63e7e-default-rtdb.firebaseio.com/cartItems/${item.id}.json`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Max-Age": "*",
          },
      })
      if (!response.ok) {
        throw new Error('something went wrong');
      }
    } catch(error) {
        setError(error.message);
    }
    console.log(error1);
    window.location.reload()
  }

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
              <div style={{ textAlign: "center",marginTop:'15px'}}>
                <Card.Title>{item.strMeal}</Card.Title>
                <Card.Title> ₹{item.mealCost}</Card.Title>
              </div>
              <div style={{ textAlign: "center" }}>
                <button
                  style={{ marginRight: "30px" }}
                  className="btn btn-outline-danger"
                  onClick={deleteHandler.bind(null, item)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-outline-success btn-sm"
                  onClick={decrementHandler.bind(null, item)}
                  style={{ margin: "2px" }}
                >
                  -
                </button>
                {item.total}
                <button
                  className="btn btn-outline-success btn-sm"
                  onClick={incrementHandler.bind(null, item)}
                  style={{ margin: "2px" }}
                >
                  +
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

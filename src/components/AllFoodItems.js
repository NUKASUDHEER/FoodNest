import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import Card1 from "./Card1.js";
import Footer from "./Footer.js";
import Carausal from "./Carausal.js";

const AllFoodItems = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error1, setError] = useState(null);
  const [allItems, setAllItems] = useState([]);

  const fetchAllItemsHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://meal-api-63e7e-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("something went wrong..!..?");
      }

      const data = await response.json();
      setAllItems(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  });

  useEffect(() => {
    fetchAllItemsHandler();
  }, []);
 
  
  let content = <p>Food Items Not Found .</p>;

  if (isLoading) {
    content = (
      <center>
        <h2>Loading...</h2>
      </center>
    );
  }
  if (allItems.length > 0) {
    content = <Card1 items={allItems}/>
  }
  if (error1) {
    content = <p>{error1}</p>;
  }
  return (
    <div>
      <Carausal/>
      {content}
      <Footer />
    </div>
  );
};

export default AllFoodItems;

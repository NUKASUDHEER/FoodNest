import React, { Fragment} from 'react'
import classes from './css/Navbar.module.css'
import { Link } from 'react-router-dom';

const Navbar = (props) => {

  return (
    <Fragment>
      <header className={classes.header}>
        <h3>Food Delivery App</h3>
        <button className={classes.button}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
        </button>
        <button className={classes.button}>
          <span className={classes.icon}></span>
          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            Your Cart
          </Link>
          <span className={classes.badge}>{props.count}</span>
        </button>
      </header>
      <div className={classes.foodItems}></div>
    </Fragment>
  );
}

export default Navbar

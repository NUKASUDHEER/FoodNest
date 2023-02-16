import React from "react";
import { CDBFooter, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import { Link } from "react-router-dom";
import classes from "../components/css/Footer.module.css";

const Footer = () => {
  return (
    <CDBFooter
      className="shadow"
      style={{ backgroundColor: "#282d32", color: "white" }}
    >
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "90%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <span
                className="ml-3 h5 font-weight-bold"
                style={{ color: "white" }}
              >
                FOOD DELIVERY
                <div className={classes.line}></div>
              </span>
            </a>
            <p className="my-3" style={{ width: "250px", color: "white" }}>
              Faster Delivery, Qality Food
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Information
              <div className={classes.line}></div>
            </p>
            <CDBBox
              flex="column"
              style={{ cursor: "pointer", padding: "0", color: "white" }}
            >
              <Link to="/" className={classes.link}>
                Resources
              </Link>
              <br />
              <Link to="/" className={classes.link}>
                About Us
              </Link>
              <br />
              <Link to="/" className={classes.link}>
                Contact
              </Link>
              <br />
              <Link to="/" className={classes.link}>
                Blog
              </Link>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Help
              <div className={classes.line}></div>
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <Link to="/" className={classes.link}>
                Support
              </Link>
              <br />
              <Link to="/" className={classes.link}>
                Sign Up
              </Link>
              <br />
              <Link to="/" className={classes.link}>
                Sign In
              </Link>
              <br />
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Restaurant Information
              <div className={classes.line}></div>
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <Link to="/" className={classes.link}>
                Privacy Policy
              </Link>
              <br />
              <Link to="/" className={classes.link}>
                FAQ
              </Link>
              <br />
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">
          &copy; Food Delivery, 2022. All rights reserved.
        </small>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;

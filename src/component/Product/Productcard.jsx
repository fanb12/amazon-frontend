import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Datacontext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function Productcard({ product, flex, renderDesc, renderadd }) {
  const { image, id, title, price, rating, description } = product;
  const [state, dispach] = useContext(Datacontext);
  //console.log(state);
  const addToCart = () => {
    dispach({
      type: Type.ADD_TO_BASKET,
      item: { image, id, title, price, rating, description },
    });
  };
  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <div>
        <Link to={`/products/${id}`}>
          <img src={image} alt="" />
        </Link>
      </div>
      <div>
        <h3>{title}</h3>

        {renderDesc && <div style={{ maxWidth: "600px" }}> {description}</div>}
        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        {renderadd && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Productcard;

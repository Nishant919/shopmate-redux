import "./ProductCard.css";

import { add, remove } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";


export const ProductCard = ({ product }) => {
  const { name, price, image } = product;
  const products = useSelector(state => state.cartState.cartList);
  const [inCartItem, setInCartItem] = useState(false);

  useEffect(() => {
    const inCart = products.find(product1 => product1.id === product.id);

    if (inCart) {
      setInCartItem(true);
    } else {
      setInCartItem(false);
    }

  }, [products])

  const dispatch = useDispatch();
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {inCartItem ? <button class="remove" onClick={() => { dispatch(remove(product)) }}>Remove</button> : <button onClick={() => { dispatch(add(product)) }}>Add To Cart</button>}
      </div>
    </div>
  )
}

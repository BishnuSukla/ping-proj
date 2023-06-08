import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useTotal = () => {
  const [total, setTotal] = useState([]);
  const cart = useSelector(state=>state.cart);
  useEffect(() => {
    const totalPrice = cart.items.reduce((acc,item)=>{
      return acc + item.quantity*item.price
    },0)
    setTotal(totalPrice.toFixed(3));
  });
  return total;
};

export default useTotal;
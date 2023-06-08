import "./styles.scss";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSingleItemToCart, deleteItem, fetchItems } from '../../redux';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Shopping = () => {
    const itemsState = useSelector(state=>state.items);
    const cartState = useSelector(state=>state.cart);
    const dispatch = useDispatch();
    useEffect(()=>{
      if(!itemsState.items.length){
        dispatch(fetchItems())
      }
    },[])

    return (
      <div className="shopping-wrapper">
        <div role="link" aria-label='Continue Shopping' className="shopping-wrapper__back">
            <div className="shopping-wrapper__back__link">
                <Link to="/">Go to Cart ({cartState.items.length})</Link>
                <ArrowForwardIosIcon fontSize="small" style={{color:'grey'}}/>
            </div>
        </div>
        <main className='shopping-wrapper__items-grid'>
            {
              itemsState.items.map((elem)=>{
                return <article key={elem.id} className='shopping-wrapper__items-grid__item'>
                  <img width="100" height="100" loading="lazy" alt="Item image" src={elem.imageSource}></img>
                  <h4>{elem.title}</h4>
                  <div className="shopping-wrapper__items-grid__item__action">
                    {
                      cartState.items.some((i)=>i.id === elem.id) ?
                      <Button variant="outlined" size="medium" color="error" onClick={()=>dispatch(deleteItem(elem))}>Remove From Cart</Button>:
                      <Button variant="contained" size="medium" onClick={()=>dispatch(addSingleItemToCart(elem))}>Add To Cart</Button>
                    }
                  </div>
                </article>
              })
            }
        </main>
      </div>
      
    )
}

export default Shopping
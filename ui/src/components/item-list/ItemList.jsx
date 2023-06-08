import "./styles.scss";
import React from 'react'
import TextField from '@mui/material/TextField';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import { useDispatch } from 'react-redux';
import { decrementItem, deleteItem, incrementItem } from '../../redux';

const ItemList = ({items}) => {
  const dispatch = useDispatch();


  return (
    <section className='itemlist'>
      {
        items.map((item)=>{
          return <article key={item.id} className="itemlist__item">
              <img loading="lazy" className="itemlist__item__img" alt="Item image" src={item.imageSource} />
              <div className="itemlist__item__title">
                  {item.title}
              </div>
              <div className="itemlist__item__counter">
                  <button disabled={item.quantity==0} title="Increment Item Quantity" className="itemlist__item__counter__button" onClick={()=>dispatch(decrementItem(item))}>-</button>
                  <TextField
                      className="itemlist__item__counter__value"
                      variant="outlined"
                      margin="none"
                      disabled
                      value={item.quantity}
                      length="5"
                  />
                  <button title="Decrement Item Quantity" className="itemlist__item__counter__button" onClick={()=>dispatch(incrementItem(item))}>+</button>
              </div>
              <div className="itemlist__item__price">${item.price}</div>
              <button title="Remove Item" className="itemlist__item__remove" onClick={()=>dispatch(deleteItem(item))}>
                  <HighlightOffTwoToneIcon/>
              </button>
          </article>
        })
      }
    </section>
    
  )
}

export default ItemList
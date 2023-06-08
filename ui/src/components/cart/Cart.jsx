import "./styles.scss";
import React, { Suspense }  from 'react'
import { useSelector } from 'react-redux'
import ItemList from '../item-list/ItemList';
import SubTotal from '../total-price/SubTotal';
const Card = React.lazy(()=>import('../payment/card/Card'));

const Cart = () => {
  const cart = useSelector(state=>state.cart);
  return (
    <main className='cart'>
      {
        cart.items.length>0?
        <>
        <section className='cart__list'>
          <h3 className="cart__list__title">My Cart ({cart.items.length})</h3>
          <ItemList items={cart.items}/>
          <div className="cart__list__subTotal">
            <SubTotal/>
          </div>
        </section>
        <section className='cart__payment'>
          <Suspense fallback={<p>Loading...</p>}>
            <Card/>
          </Suspense>
        </section>
        </>:
        <div>No Items to Display</div>
      }
      
    </main>
  )
}

export default Cart
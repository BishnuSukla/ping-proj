import React, { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../redux';
import { Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Cart = React.lazy(()=>import('./Cart'));

const CartWrapper = () => {
    const itemsState = useSelector(state=>state.items);
    console.log(itemsState);
    const dispatch = useDispatch();
    useEffect(()=>{
      if(!itemsState.items.length){
        dispatch(fetchItems())
      }
    },[])
    return (
        <main className="cart-wrapper">
            <div role="link" aria-label='Continue Shopping' className="cart-wrapper__back">
                {itemsState.error?null:
                <div className="cart-wrapper__back__link">
                    <ArrowBackIosNewIcon fontSize='small' style={{color:'grey'}}/>
                    <Link to="/shopping">Continue Shopping</Link>
                </div>
                }
               
            </div>
            {
                itemsState && itemsState.loading?
                <Box sx={{ display: 'flex',justifyContent:'center'}}>
                    <CircularProgress />
                </Box>
                :itemsState.error?
                <div style={{textAlign:'center'}}>Something went wrong!</div>:
                <Suspense fallback={<p>Loading...</p>}><Cart/></Suspense>
            }
        </main>
    )
}

export default CartWrapper;
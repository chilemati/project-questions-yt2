import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { cartData } from '../atoms/cart'

const Cart = () => {
    let [cart,setCart] = useRecoilState(cartData);
    let [total,setTotal] = useState(0)
    function handleRemove(id) {
        let removed = cart.filter(function( obj ) {
            return obj.id !== id;
          });

          setCart(removed);
    }
     function getTotal() {
       
        return 0;
     }
  return (
    <div>
        <h3>Cart Items</h3>
        {
            cart.map(each=>(
                <div key={each.id}>
                    <h5> {each.name} | {each.price} <button onClick={()=> handleRemove(each.id)} >X</button> </h5>
                </div>
            ))
        }
        <h3>Total Price: {getTotal()} </h3>
    </div>
  )
}

export default Cart
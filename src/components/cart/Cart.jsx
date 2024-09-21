import React from 'react'
import { useRecoilState } from 'recoil'
import { cartData } from '../atoms/cart'

const Cart = () => {
    let [cart,setCart] = useRecoilState(cartData);
    function handleRemove(id) {
        let removed = cart.filter(function( obj ) {
            return obj.id !== id;
          });

          setCart(removed);
    }
  return (
    <div>
        <h3>Cart Items</h3>
        {
            cart.map(each=>(
                <div key={each.id}>
                    <h5> {each.name} <button onClick={()=> handleRemove(each.id)} >X</button> </h5>
                </div>
            ))
        }
    </div>
  )
}

export default Cart
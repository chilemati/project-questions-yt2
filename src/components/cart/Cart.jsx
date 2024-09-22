import React, { useEffect, useState } from 'react'
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
    useEffect(()=> {
        if(cart.length > 0) {
           let sum = cart.map((a)=> {
           let y = Number(String(a.price).split(' ')[1].split('.000')[0])
               return y;
            });

           setTotal(sum.reduce((a,b)=> a+=b))

        }else{
            console.log('cart empty')
        }
     },[cart])
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
        <h3>Total Price: Rp {String(total).includes('.')?String(total).padEnd(5,'0').concat('.000'):String(total).concat('.').padEnd(5,'0').concat('.000')} </h3>
    </div>
  )
}

export default Cart
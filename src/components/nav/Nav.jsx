import React from 'react'
import { Link } from 'react-router-dom';
import cartImg from '../../assets/cart.svg';
import { useRecoilValue } from 'recoil';
import { cartData } from '../atoms/cart';

const Nav = () => {
    let cart = useRecoilValue(cartData);
    // router step 4
  return (
    <nav className= 'py-2 px-4 bg-slate-200 ' >
        <ul className='flex items-center  justify-between' >
            <li> 
                <Link to='/' >Logo</Link>
            </li>
            <li className='flex items-center justify-between gap-4'>
                <Link to='/' >Home</Link>
                <Link to='/product' >Products</Link>
                <Link className='relative h-[21.86px] w-[24.53px] block  ' to='/cart' >
                  <img className='' src={cartImg} alt="cart" />
                  <span className='absolute text-red-500  top-[-20px] right-[-5px] text-[14px] '> {cart.length} </span>
                </Link>

            </li>
        </ul>
    </nav>
  )
}

export default Nav
import React from "react";

import { products } from "../data/product.json";
import { useRecoilState } from "recoil";
import { cartData } from "../atoms/cart";
import { useNavigate } from "react-router-dom";
import { Image } from "cloudinary-react";
import Intro from "../intro/Intro";

const Prouduct = () => {
  let [cart, setCart] = useRecoilState(cartData);
  let redir = useNavigate();

  function addToCart(data) {
    // let upd = {
    //   name: data.name,
    //   img: data.img,
    //   price: data.price,
    //   id: data.id,
    // };
    // check if prduct exist in cart

  if(cart.find(x => x.id === data.id)) {
    console.log('found')
  }else{
    console.log('not found')
    setCart([...cart, data]);
  }

  }
  return (
    <div>
      <Intro />
      <h2>All Prouducts</h2>

      <div className="flex items-center justify-center flex-row flex-wrap gap-4 ">
        {products.map((each) => (
          <div
            onClick={(e) => {}}
            className="flex w-full md:w-[285px]    p-3 shadow-lg items-center justify-center flex-col flex-wrap gap-2 "
            key={each.id}
          >
            <Image className='h-[301px] w-full ' cloudName={each.cloudname} publicId={each.img} loading='lazy' />
            <h4> {each.name} </h4>
            <p> {each.disc} </p>
            <button onClick={(e)=> addToCart(each) }>Add To Cart</button>
            <button onClick={(e)=> redir('/single/'+each.id) }>compare</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prouduct;

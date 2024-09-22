import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from "../data/product.json";
import axios from 'axios';
import { Image } from 'cloudinary-react';

const SingleProduct = () => {

    let {id} = useParams();
    let [data,setData] = useState(null);
    useEffect(()=> {
       products.map(each=> {
        if(each.id == id) {
            setData(each);
        }
       })
    // axios.get('http://localhost:9000/products/'+id)
    // .then(resp=> {
    //     console.log(resp);
    //     setData(resp.data);
    // })
    // .catch(err=> {
    //     console.log(err)
    // })

    /* 
      how to free host on varcel
      > make sure your react is error free
      > npm run build
      > login or signup to varcel
      > push your project to github
      > connect your github to your varcel account
      > import from git
      > set some enviromental variable
      > deploy
     */
    },[])

  return (
    <div className="flex items-center justify-center flex-col flex-wrap gap-4 ">
        <h3>SingleProduct | {id}</h3>
        {
            data && <div>
              <h4> {data.name} </h4>
              <Image className=' ' cloudName='dlifiojbx' publicId={data.img} loading='lazy' />
            </div>
        }
         </div>
  )
}

export default SingleProduct
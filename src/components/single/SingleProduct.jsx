import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from "../data/product.json";
import axios from 'axios';

const SingleProduct = () => {

    let {id} = useParams();
    let [data,setData] = useState(null);
    useEffect(()=> {
    //    products.map(each=> {
    //     if(each.id == id) {
    //         setData(each);
    //     }
    //    })
    axios.get('http://localhost:9000/products/'+id)
    .then(resp=> {
        console.log(resp);
        setData(resp.data);
    })
    .catch(err=> {
        console.log(err)
    })
    },[])

  return (
    <div>
        <h3>SingleProduct | {id}</h3>
        {
            data && <div>
              <h4> {data.name} </h4>
            </div>
        }
         </div>
  )
}

export default SingleProduct
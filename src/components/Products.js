import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Products = () => {

    const cartdata=useSelector((state)=>state.cartSlice.somecart)
    console.log(cartdata,"cartdata")
  return (
    <div>
        <h1>welcome to products....</h1>
        <div>
            <h1>{cartdata.price}</h1>
            <h1>{cartdata.category}</h1>
            <img src={cartdata.image} height={"50px"} width={"80px"}></img>
        </div>
        <Link to="/">back</Link>
    </div>
  )
}

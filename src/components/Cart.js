import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setsomecart } from '../slices/cartSlice'

export const Cart = () => {
    const [products,setproduct]=useState([])
    const dispatch=useDispatch()
    
    useEffect(()=>{
        productdata()
    },[])

    const productdata=async()=>{
       const datasend={
        method:"GET"
       }
        const data=await fetch("https://fakestoreapi.com/products",datasend)
        const conv=await data.json()
        console.log(data)
        setproduct(conv)
       
    }


  return (
    <div>
        <div>
            {products.map((e)=>{
                return (
                    <div onClick={()=>{dispatch(setsomecart(e))}}>
                        <img src={e.image} height={"70px"} width={"120px"}></img>
                        <h5>{e.price}</h5>
                       <button> <Link to="/product">addcart</Link></button>
                    </div>
                )
            })}
        </div>
        <Link to="/product"> login to products</Link>
    </div>
  )
}

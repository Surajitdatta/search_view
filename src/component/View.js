import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const View = () => {
    const[view, setView] = useState([])
    const {id} = useParams();
    useEffect(()=>{
        const fun = async()=>{
            const url = await fetch(`https://fakestoreapi.com/products/${id}`);
            const res= await url.json();
            setView(res);
        }
        fun()

    },[])
    console.log(view)
  return (
    <div className="view">
        <div>
            <img src={view.image} height="300px" width="100%"   />
        </div>
        <div>
            
            <b>{view.title}</b>
        </div>
        <div>
            <u>Description</u><br/>
            {view.description}
        </div>
        <div>
            <u>Price</u><br/>
            {view.price} Rs.

        </div>
        <div style={{margin:"10px"}}>
            <button>BUY NOW</button>
        </div>
        

        


    </div>
  )
}

export default View;
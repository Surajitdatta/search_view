
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Shimmer from './Shimmer';
import View from './View';


const Cloths = () => {
    const[search, setSearch] = useState("")
    const[cloths, setCloths] = useState([])
    const[data, setData] = useState([])
    
    
    


    useEffect(()=>{
        const fetchData=async()=>{
            const api=await fetch("https://fakestoreapi.com/products");
            const res = await api.json()
            setCloths(res)
            setData(res)
            
        }
        fetchData()
    },[])
    // console.log(data)






    const searchHandler=(e)=>{
        const value = e.target.value;
        setSearch(e.target.value)
        const productFilter= cloths.filter(item=>item.title.toLowerCase().includes(value.toLowerCase()))
        console.log(productFilter)
        setData(productFilter)
    }


    const navigate = useNavigate();
    const navigation=(id)=>{
        navigate(`/view/${id}`);

       
    }

   

  return cloths.length===0?<Shimmer/>: data.length===0?<h2>No data is found</h2> :(
    <div className="main">
       {/* header start */}
       <div className="header">
            <div className="search">
                <input type="search" placeholder="Search products" value={search}  onChange={searchHandler}/>

            </div>
            <div className=" logo">
                LOGO
            </div>

        </div>
        



        {/* header finish */}
        
        {
            data.map((v)=>{
                return(
                    <>
                      <div className="cloths">
                        <div>
                            <img src={v.image} height="200px" width="100%"/>
                        </div>
                        <div className='clothsContent'>
                            <b>{v.title}</b>
                            <p>Price: {v.price}</p>
                            <button onClick={()=>navigation(v.id)}>View Product</button>

                        </div>
                      </div>
                    </>
                )
            })

        }

    </div>
  )
}

export default Cloths;
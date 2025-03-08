import React, { useEffect, useState } from "react";
import "./Laptops.css";
import axios from "axios";

const Watches=()=>{
    const [laptops,setLaptops]=useState([]);
    const get_laptops = async()=>{
        const res = await axios.get("http://localhost:9001/watches");
        const {data} = res;
        setLaptops(data);

    }
    useEffect(()=>{
        get_laptops();
    },[]);
    return(
        <>
        <div className='parent'>
            {
                laptops.map((element,index)=>{
                    return(
                        <div className="child">
                            <img src={element.pimage}></img>
                            <h3><i className='fa fa-rupee'></i>{element.pcost}</h3>
                            <p>{element.pqty}</p>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Watches;
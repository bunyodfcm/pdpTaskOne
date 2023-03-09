import React from 'react'
import './Counter-five.css'
import { counterData } from './Counter-data'
import { useState } from 'react'
import { useEffect } from 'react'
const CounterFive = () => {
    const [addressCount, setAddressCount] = useState(0)
    useEffect({
        if (ad) {
            
        }
    })
    const removeAddressCount = () =>{
        if (addressCount>0) {
            setAddressCount(prev=>prev-1)
        }
    }
    console.log(counterData.address.length);
  return (
    <div>
        <p>First Name: {counterData.firstName}</p>
        <p>Last Name: {counterData.lastName}</p>
        <p>Address: {counterData.address[0].name}</p>
        <div>
            <button className='btn btn-white' onClick={removeAddressCount} > - </button>
            <span>0</span>
            <button className='btn btn-white' onClick={()=>setAddressCount(prev=>prev+1)}> + </button>
        </div>
    </div>
  )
}

export default CounterFive
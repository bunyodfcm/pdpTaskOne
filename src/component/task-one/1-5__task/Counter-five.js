import React from 'react'
import './Counter-five.css'
import { counterData } from './Counter-data'
import { useState } from 'react'
import { useEffect } from 'react'
const CounterFive = () => {
    const [addressCount, setAddressCount] = useState(0)
    const [errorText, setErrorText] = useState('')
    // useEffect({
    //     if (ad) {
            
    //     }
    // })
    const removeAddressCount = () =>{
        if (addressCount>0) {
            setAddressCount(prev=>prev-1)
            setErrorText('')
        }
    }
    const addAddressCount = () =>{
        if (addressCount + 1<counterData.address.length) {
            setAddressCount(prev=>prev+1)
            setErrorText('')
        }else  {
            setErrorText('sizda jami ' + addressCount + ' ta malumot bor')
        }
    }
  return (
    <div>
        <p>First Name: {counterData.firstName}</p>
        <p>Last Name: {counterData.lastName}</p>
        <p>Address: {counterData.address[addressCount].name}</p>
        <div>
            <button className='btn btn-white' onClick={removeAddressCount} > - </button>
            <span>{addressCount}</span>
            <button className='btn btn-white' onClick={addAddressCount}> + </button>
        </div>
        <p className='errorText'>{errorText}</p>
    </div>
  )
}

export default CounterFive
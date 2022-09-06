import React, { useEffect, useState } from 'react'


const Footer = function () {
    const toDay =new Date();
    const [day,setDay] = useState('')
  
    useEffect(()=>{
        setDay(toDay.getFullYear())
        console.log(toDay.getFullYear())
    },[])
    return(
        <div className='footer'>Copyright {day} Your Company - Designed By: <a href='tooplate.com'>Tooplate</a></div>
    ) 
}
export default Footer
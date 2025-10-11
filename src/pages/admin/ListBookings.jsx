import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../../assets/assets';
import Loading from '../../components/Loading';
import Title from '../../components/admin/Title';

const ListBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY
  
    const [bookings, setBookings] = useState([])
    const [isloading, setIsLoading] = useState(true);

    const getAllBookings = async () =>{
      setBookings(dummyBookingData)
      setIsLoading(false)
    }

    useEffect(()=>{
      getAllBookings();
    },[])
  return ! isloading ?  (
   <>
   <Title text1='List' text2="Bookings"/>
   <div className='max-w-4xl mt-6 overflow-x-auto'>

   </div>
   </>
  ):<Loading/>;
}

export default ListBookings
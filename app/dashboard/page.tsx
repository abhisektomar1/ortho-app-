"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

function Page() {
  const router = useRouter() 
  useEffect(() => {
    const authToken = localStorage.getItem('id');
    if (!authToken) {
      router.push("/")
      return
    }
  
  },[])
  return (
    <div>
      dvgrr
      
    </div>
  )
}

export default Page

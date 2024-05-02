"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import Layout from '../../components/layout'

function Page() {
  const router = useRouter() 
  // useEffect(() => {
  //   const authToken = localStorage.getItem('id');
  //   if (!authToken) {
  //     router.push("/")
  //     return
  //   }
  
  // },[])


  return (
    <Layout>
      Dashboard
    </Layout>
  )
}

export default Page

"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const authToken = localStorage.getItem('id');
    if (!authToken) {
      router.push('/signin');
      return;
    } else {
      router.push('/dashboard');
    }
   
  }, []);
}

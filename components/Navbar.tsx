"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { account } from '@/app/appwrite';

function Navbar() {
    const logout = async () => {
        await account.deleteSession("current")
      };
  return (
    <div className='flex flex-row justify-between items-center border-b border-slate-200 p-2'>
      <Image src="/next.svg" alt='logo' width={70} height={100} />
        <Button onClick={logout}>
            Logout
        </Button>
    </div>
  )
}

export default Navbar

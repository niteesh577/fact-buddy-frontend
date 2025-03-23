"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Authentication from './Authentication'
import { useAuthContext } from '../provider'
import Link from 'next/link'


function Header() {
    const {user} = useAuthContext();

  return (
    <div className='p-4 flex items-center justify-between'>
    <div className='flex items-center gap-3'>
      <Image src = {'/logo.svg'}
      alt='logo'
      width = {200}
      height = {100}/>
    </div>

    <div>
        {!user?  
        <Authentication>
        <Button>Sign In</Button>
        </Authentication>
        :<div className='flex items-center gap-3'>
            <Link href={'/dashboard'}>
            <Button>Dashboard</Button>
            </Link>
           {user?.photoURL && <Image src={user?.photoURL} alt="userImage" width={40} height ={40}
            className='rounded-full'/>}
            </div>}
       
    </div>

    </div>
   
  )
}

export default Header

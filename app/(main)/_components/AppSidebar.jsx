"use client"
import React from 'react'

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { HomeIcon, icons, LucideVerified, PictureInPicture, Search, Text, Verified, VerifiedIcon, Video } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const MenuItems =[
    {
        title:'Home',
        url:'/dashboard',
        icon:HomeIcon
    },

    {
        title:'Explore',
        url:'/explore',
        icon:Search
    },

    {
        title:'VeriText',
        url:'/veritext',
        icon:LucideVerified
    },

    {
        title:'PicProof',
        url:'/picproof',
        icon:PictureInPicture
    },

    {
        title:'VidVerify',
        url:'/vidverify',
        icon:Video
    },

]

function AppSidebar() {

    const path = usePathname();
    console.log(path);
   
  return (
    <Sidebar>
      <SidebarHeader>
        <div>
        <div className=' w-full flex items-center justify-center mt-4'>
        <Image src='./logo.svg' alt='logo' width={150} height={150}/>
        </div>
        <h2 className='text-lg text-gray-300 text-center'>
            Uncover The Truth
        </h2>
        </div>
       
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupContent>

            {/* <div className='mx-5 mt-10'>
                <Button className='w-full'>+VeriText</Button>
              
            </div> */}
            <SidebarMenu>
                {MenuItems.map((menu,index)=>(
                   <SidebarMenuItem  key={index} className='mt-3'>
                    <SidebarMenuButton isActive={path === menu.url} className='p-5'>
                        <Link href={menu.url} className='flex items-center gap-4 p-3'>
                        <menu.icon/>
                        <span>{menu.title}</span>
                        </Link>
                    </SidebarMenuButton>
                   </SidebarMenuItem>
                ))}
            </SidebarMenu>

            </SidebarGroupContent>
           
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className='mb-5'>
        <Button variant={'secondary'}>Logout</Button>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar

import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import Gallery from '../../../pages/Gallery'

const Navbar = () => {
    
    const Menu=[
        {
            id:1,
            name:'Home',
            path:'/'
        },
        {
            id:2,
            name:"Gallery",
            path:'/Gallery'
        },
      
      
       
       
        {
            id:4,
            name:'Contact Us',
            path:'/Contact'
        },
        {
            id:5,
            name:'FAQ',
            path:'/faq'
        },
    ]
  return (
    <div className='flex items-center justify-between p-4 shadow-sm bg-blue-300 '>
        <h1 className="mr-40" style={{fontWeight:'bold', fontSize:'2em'}}>
  <span style={{color:'#00008B'}}>HEALTH</span>
  <span style={{color:'#4169E1'}}> CENTER</span>
</h1>
        <ul className='md:flex gap-8 hidden '>
            {Menu.map((item,index)=>(
                <li key={item.id} className='hover:text-purple-800 cursor-pointer hover:scale-105 transition-all ease-in-out'>
                    <Link href={item.path}>
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
        <Button>
            Login
        </Button>
    </div>
  )
}

export default Navbar

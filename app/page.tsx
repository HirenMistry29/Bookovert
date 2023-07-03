"use client"
import Image from 'next/image'
import '../assets/css/theme-palette.css'
import { useEffect, useState } from 'react'
import { json } from 'stream/consumers'


export default function Home() {
const[type , setType] = useState()
const[setup,setSetup] = useState()
const[punchline , setPunchline] = useState()


useEffect(()=>{
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then((response)=>response.json())
    .then((json)=>{console.log(json), setType(json.type) , setSetup(json.setup) ,setPunchline(json.punchline)})

},[])


  return (
      <>
        <div className='pt-5 overflow-y-auto pr-10 pl-70'>
          <div>
            <p className='font-semibold text-xl font-poppins text-26'>Books</p>
            <p className='text-sm'>From New York Times Best Seller</p>
          </div>
        </div>
      </>
  )
}

"use client"
import React                        from "react";
import HomeIcon                     from '../public/images/home-1.png'
import ExploreIcon                  from '../public/images/explore-1.png'
import WishlistIcon                 from '../public/images/wishlist-1.png'
import ContactUsIcon                from '../public/images/contact-mail-30955831.png'
import Logo                         from '../public/images/book-icon-1.png'
import '../assets/css/mix.css'
import Image from "next/image";
import { useRouter } from "next/navigation";




export const Sidebar = ():JSX.Element => {
    const router = useRouter()

    return(
        <>
            <div className="sidebar w-sidebar overflow-y-auto h-full fixed text-custom-dark">
                <div>
                    <li className=" flex items-center gap-6 Icon-Text left-0 top-0">
                        <Image src={Logo} width={30} height={30} alt=""/>
                      Bookovert
                    </li>
                </div>
                <div className="mt-10 cursor-pointer p-8">
                <>
                <li className={`h-12 flex flex-row items-center gap-6 p-5 rounded-xl font-medium text-base hover:bg-slate-100 hover:text-lg` }>
                    <Image src={ HomeIcon } alt="" height={ 20 } width={ 20 } /> 
                    Home
                </li>
                <li onClick={()=>router.push(`./explore`)}  className={`h-12 flex flex-row items-center gap-6 p-5 rounded-xl font-medium text-base  hover:bg-slate-100 hover:text-lg` }>
                    <Image src={ ExploreIcon } alt="" height={ 20 } width={ 20 } /> 
                    Explore
                </li>
                <li className={`h-12 flex flex-row items-center gap-6 p-5 rounded-xl font-medium text-base  hover:bg-slate-100 hover:text-lg` }>
                    <Image src={ WishlistIcon } alt="" height={ 20 } width={ 20 } /> 
                    WishList
                </li>
                <li className={`h-12 flex flex-row items-center gap-6 p-5 rounded-xl font-medium text-base  hover:bg-slate-100 hover:text-lg` }>
                    <Image src={ HomeIcon } alt="" height={ 20 } width={ 20 } /> 
                    Downloads
                </li>  
                <li className={`h-12 flex flex-row items-center gap-6 p-5 rounded-xl font-medium text-base  hover:bg-slate-100 hover:text-lg` }>
                    <Image src={ ContactUsIcon } alt="" height={ 20 } width={ 20 } /> 
                    Contact Us
                </li>  
                </>
                </div>
            </div>
        </>
    )
}

export default Sidebar;

import Link from "next/link"
import MobileMenu from "./MobileMenu"
import { Bell, CirclePlus, House, MessageCircleMore, Search, User, Users } from 'lucide-react'
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"



const NavBar = () => {
   

  return (
    <div className="h-24 flex items-center justify-between">
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-orange-500">Facebook</Link>
      </div>

      <div className="hidden md:flex w-[50%] text-sm items-center justify-between gap-4 ">
         <div className="flex gap-8 text-gray-600">
            <Link href="/" className="flex items-center gap-2">
                <House />
                <span>Homepage</span>
            </Link>

            <Link href="/" className="flex items-center gap-2">
                <Users />
                <span>Friends</span>
            </Link>

            <Link href="/" className="flex items-center gap-2">
                <CirclePlus />
                <span>Stories</span>
            </Link>
         </div>

         <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
            <input type="text" placeholder="search..." className="bg-transparent
            outline-none" />
            <Search size={20}/>
         </div>
      </div>


      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
         
           <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "></div>
        </ClerkLoading>

        <ClerkLoaded>
            <SignedIn>
               <div className="flex items-center gap-8">
                 <Users size={20} />
                 <MessageCircleMore size={20} />
                 <Bell size={20}/>
               <UserButton />
               </div>
            </SignedIn>

            <SignedOut>
                <div className="flex items-center gap-2 text-sm">
                  <User />
                  <Link href="/sign-in">Login/Register</Link>
                </div>
            </SignedOut>

            
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  )
}

export default NavBar

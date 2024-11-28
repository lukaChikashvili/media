
import Link from "next/link"
import MobileMenu from "./MobileMenu"
import { CirclePlus, House, Users } from 'lucide-react'
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut } from "@clerk/nextjs"



const NavBar = () => {
   

  return (
    <div className="h-24 flex items-center justify-between">
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-orange-500">Facebook</Link>
      </div>

      <div className="hidden md:flex w-[50%]">
         <div className="flex gap-6 text-gray-600">
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
      </div>


      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
         
           <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "></div>
        </ClerkLoading>

        <ClerkLoaded>
            <SignedIn>
                Signed in
            </SignedIn>

            <SignedOut>
                Signed out
            </SignedOut>

            
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  )
}

export default NavBar


import Link from "next/link"
import MobileMenu from "./MobileMenu"



const NavBar = () => {
   

  return (
    <div className="h-24 flex items-center justify-between">
      <div>
        <Link href="/" className="font-bold text-xl text-orange-500">Facebook</Link>
      </div>

      <div>
        center
      </div>


      <div>
        <MobileMenu />
      </div>
    </div>
  )
}

export default NavBar

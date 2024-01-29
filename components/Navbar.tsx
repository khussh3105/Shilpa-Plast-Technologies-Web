import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container px-6 lg:px-20 3xl:px-0 relative z-30 py-3">
        <Link href="/">
          <Image src="/Shilpa.png" alt="logo" width={120} height={50}/> 
        </Link>
    </nav>
  )
}

export default Navbar
import Button from "../components/Button"
import { ArrowUpRight } from "lucide-react"

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center px-6 py-4 fixed top-0 left-0 z-10 backdrop-blur-xs">
      <img src="/logo.png" className="w-20 lg:w-30" />

      <div className="gap-2 hidden lg:flex">
        <Button selected={true}>Characters</Button>
        <Button>Features</Button>
        <Button>Gallery</Button>
        <Button>
          <div className="flex items-center gap-2">
            <p>Wishlist on Steam</p>
            <ArrowUpRight size={36} strokeWidth={3} className="text-shadow-[-0.5px_2px_0px_black]" />
          </div>
        </Button>
      </div>

      <div className="block lg:hidden">
        <Button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
        </Button>
      </div>
    </div>
  )
}
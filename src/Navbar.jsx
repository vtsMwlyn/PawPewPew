import Button from "./components/Button"

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center px-4 py-2">
      <img src="/logo.png" className="w-30 lg:w-40" />

      <div className="gap-2 hidden lg:flex">
        <Button selected={true}>Characters</Button>
        <Button>Features</Button>
        <Button>Gallery</Button>
        <Button>Wishlist</Button>
      </div>

      <div className="block lg:hidden">
        <Button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
        </Button>
      </div>
    </div>
  )
}
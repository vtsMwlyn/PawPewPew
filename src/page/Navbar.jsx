import Button from "../components/Button"

export default function Navbar() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
    <div className="w-full flex justify-between items-center px-6 py-4 fixed top-0 left-0 z-10 ">
      <div className="flex">
        <button onClick={() => scrollToSection("hero-page")}>
          <img src="/logo-pawpewpew.webp" className="w-20 lg:w-30" />
        </button>
      </div>

      <div className="gap-2 hidden lg:flex">
        <Button selected={true}>Characters</Button>
        <Button>Features</Button>
        <Button>Gallery</Button>
        <Button link="https://store.steampowered.com/app/4625080/Paw_Pew_Pew/">
          <div className="flex items-center justify-center gap-2">
            <img src="/logo-steam.webp" className="w-8 drop-shadow-[-1px_4px_0px_#0F1B24]" />
            <p className="text-lg leading-tight text-left">Wishlist <br /> on Steam</p>
          </div>
        </Button>
      </div>

      <div className="block lg:hidden">
        <Button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
        </Button>
      </div>
    </div>

    </>
    
  )
}
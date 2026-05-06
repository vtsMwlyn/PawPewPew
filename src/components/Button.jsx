export default function Button({ selected, children }) {
  return (
    <button type="button"
      className={`
        rounded-full py-1 px-4 text-white uppercase
        border-4  border-black
        
        hover: ${selected ? 'shadow-[-1px_4px_0px_black]' : ''}
        bg-[linear-gradient(to_bottom,#49B888_40%,#428166)]
        hover:bg-[linear-gradient(to_bottom,#d31164_40%,#4a1b4e)]
      `}
    >
      <p className="text-shadow-[-0.5px_2px_0px_black] text-2xl">{children}</p>
      </button>
  )
}
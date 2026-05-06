export default function Button({ selected, children }) {
  return (
    <button type="button"
      className={`
        rounded-full py-1 px-4 text-white uppercase
        border-2 ${selected ? 'border-b-8 border-l-4' : 'border-b-4 border-l-3'} border-black
        ${selected ? 'bg-[linear-gradient(to_bottom,#d31164_40%,#4a1b4e)]' : 'bg-[linear-gradient(to_bottom,#49B888_40%,#428166)]'}
      `}
    >
      <p className="text-shadow-[-0.5px_2px_0px_black] text-2xl">{children}</p>
      </button>
  )
}
export default function Button({ selected, children }) {
  return (
    <button type="button"
      className={`
        rounded-full py-1 px-4 text-white uppercase
        border-4  border-blueblack
        hover: ${selected ? 'shadow-[-1px_4px_0px_#0F1B24]' : ''}
        active:shadow-[-1px_4px_0px_#0F1B24]
        bg-hijaubaru 
        hover:bg-ungupink
      `}
    >
      <p className="text-shadow-[-0.5px_2px_0px_#0F1B24] text-2xl">{children}</p>
      </button>
  )
}
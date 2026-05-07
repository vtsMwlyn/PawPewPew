export default function Button({ selected, children }) {
  return (
    <button type="button"
      className={`
        rounded-full py-1 px-4 text-white uppercase
        border-4  border-black
        hover: ${selected ? 'shadow-[-1px_4px_0px_black]' : ''}
        bg-hijaubaru
        hover:bg-ungupink
      `}
    >
      <p className="text-shadow-[-0.5px_2px_0px_black] text-2xl">{children}</p>
      </button>
  )
}
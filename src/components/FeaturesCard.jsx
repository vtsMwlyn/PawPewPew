export default function FeaturesCard({ title, subtitle, description, image }) {
  return (
    <div className="flex flex-col text-white text-shadow-[-2px_3px_0px_#0F1B24] items-center py-10 px-14 w-100 h-160 bg-hijaubaru-reverse border-blueblack border-5 rounded-3xl gap-6 drop-shadow-[-6px_7px_6px_#0F1B24]">
      <img src={image} alt={title} className="border-blueblack border-5 rounded-3xl w-70 h-70 object-cover" />
      <div>
        <h1 className="text-xl text-center">{title}</h1>
        <h2 className="text-sm text-center comic-relief-bold"> {subtitle} </h2>
      </div>
      <p className="text-base text-justify comic-relief-bold">{description}</p>
    </div>
  )
}

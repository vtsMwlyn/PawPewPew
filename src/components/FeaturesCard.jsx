export default function FeaturesCard({ title, subtitle, description, image }) {
  return (
    <div className="flex flex-col text-white text-shadow-[-2px_3px_0px_#0F1B24] items-center 
    py-5 2xl:py-15 
    px-5 2xl:px-15 
    w-full h-130 2xl:h-180 
    bg-hijaubaru-reverse border-blueblack border-5 rounded-3xl 
    gap-3 2xl:gap-6 
    drop-shadow-[-6px_7px_6px_#0F1B24]">
      <img src={image} alt={title} 
        className="border-blueblack border-5 rounded-3xl 
        h-70 object-cover"
        />
      <div>
        <h1 className="text-xl text-center">{title}</h1>
        <h2 className="text-sm text-center comic-relief-bold"> {subtitle} </h2>
      </div>
      <div dangerouslySetInnerHTML={{ __html: description }} className="text-base text-justify comic-relief-bold"/>
    </div>
  )
}

export default function Section({ className, children, ...rest }) {
  return (
    <section
      className={`${className} w-full flex justify-center relative`}
      {...rest}>
      <div className="w-5/6 max-w-500 flex flex-col items-center">
        {children}
      </div>
    </section>
  )
}
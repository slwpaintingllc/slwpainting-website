import Image from 'next/image'
export default function Hero(){
  return (
    <section className="hero" style={{backgroundImage:"url('/hero-sunset.jpg')"}}>
      <div className="hero-overlay" />
      <div className="relative z-10 text-center px-6 text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-3">SLW Painting LLC | Professional Painters in Phoenix, AZ</h1>
        <p className="text-lg md:text-2xl mb-6 font-medium">Residential & Commercial Professional Painters in Phoenix</p>
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
          <a href="tel:4804758721" className="text-xl font-semibold">480-475-8721</a>
          <a href="#contact" className="btn btn-primary text-lg px-8 py-3">Schedule Now</a>
        </div>
      </div>
    </section>
  )
}

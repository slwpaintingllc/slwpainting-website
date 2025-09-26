import Image from 'next/image'
export default function Nav(){
  return (
    <header className="sticky-nav bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="SLW Painting" width={84} height={84} className="object-contain"/>
          <div className="text-lg font-bold">SLW Painting LLC</div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-sky-600">About</a>
          <a href="#services" className="hover:text-sky-600">Services</a>
          <a href="#portfolio" className="hover:text-sky-600">Portfolio</a>
          <a href="#testimonials" className="hover:text-sky-600">Testimonials</a>
          <a href="#contact" className="btn btn-primary">Get a Free Quote</a>
        </nav>
        <div className="md:hidden"><a href="tel:4804758721" className="btn btn-primary">Call</a></div>
      </div>
    </header>
  )
}
import Image from 'next/image'
export default function Nav(){ return (
  <nav className="bg-white shadow-sm">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="SLW Painting logo" width={64} height={64} className="object-contain" />
        <div className="text-lg font-bold">SLW Painting LLC</div>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <a href="#about" className="hover:text-blue-700">About</a>
        <a href="#process" className="hover:text-blue-700">Process</a>
        <a href="#work" className="hover:text-blue-700">Our Work</a>
        <a href="#testimonials" className="hover:text-blue-700">Testimonials</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="tel:4804758721" className="hidden md:inline-block border px-4 py-2 rounded-md text-blue-700">Call</a>
        <a href="#contact" className="btn btn-primary">Get a Free Quote</a>
      </div>
    </div>
  </nav>
)}
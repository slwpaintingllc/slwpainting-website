import Image from 'next/image'
export default function Nav(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4"><Image src="/logo.png" alt="logo" width={80} height={80}/><div className="text-lg font-bold">SLW Painting LLC</div></div>
        <nav className="hidden md:flex items-center gap-6"><a href="#about">About</a><a href="#services">Services</a><a href="#portfolio">Portfolio</a></nav>
        <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded">Get a Free Quote</a>
      </div>
    </header>
  )
}

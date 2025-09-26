import {useEffect,useState} from 'react'
const slides=['/hero1.jpg','/hero2.jpg','/proj1.png']
const brands=['/brand_sherwin.svg','/brand_behr.svg','/brand_bm.svg','/brand_ppg.svg','/brand_valspar.svg']
export default function Hero(){
  const [i,setI]=useState(0)
  useEffect(()=>{const t=setInterval(()=>setI(n=> (n+1)%slides.length),15000);return()=>clearInterval(t)},[])
  return (
    <section className="relative h-[72vh] md:h-[80vh]">
      {slides.map((s,idx)=> (
        <div key={s} className={`absolute inset-0 hero-slide ${idx===i? 'opacity-100':'opacity-0'}`} style={{backgroundImage:`url(${s})`}} aria-hidden></div>
      ))}
      <div className="absolute inset-0 overlay-dark"></div>
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-24 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Top-Rated Painting Services in Phoenix, AZ</h1>
        <p className="text-lg md:text-xl mb-6">Enhancing Your Space with Professional Painting Solutions</p>
        <div className="max-w-2xl mx-auto text-sm md:text-base mb-6">When you’re searching for professional painters in Phoenix, AZ, SLW Painting is your top choice. Our experienced team specializes in residential and commercial painting, delivering high-quality results tailored to the unique needs of homes and businesses in Phoenix.</div>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="btn btn-primary">Get a Free Quote</a>
          <a href="tel:4804758721" className="btn btn-outline">Call Now</a>
        </div>
        <div className="mt-8 flex justify-center gap-6 items-center opacity-90">
          {brands.map(b=> <img key={b} src={b} alt="brand" className="h-8" />)}
        </div>
      </div>
    </section>
  )
}
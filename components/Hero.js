import {useEffect,useState} from 'react'
const slides=['/hero1.jpg','/hero2.jpg']
export default function Hero(){
  const [i,setI]=useState(0)
  useEffect(()=>{const t=setInterval(()=>setI(n=> (n+1)%slides.length),15000);return()=>clearInterval(t)},[])
  return (
    <section style={{height:'60vh'}} className="relative">
      {slides.map((s,idx)=> <div key={s} style={{backgroundImage:`url(${s})`,backgroundSize:'cover',backgroundPosition:'center'}} className={`absolute inset-0 ${idx===i? 'opacity-100':'opacity-0'}`}></div>)}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white" style={{paddingTop:'6rem'}}>
        <h1 className="text-3xl font-bold">Top-Rated Painting Services in Phoenix, AZ</h1>
        <p>Enhancing Your Space with Professional Painting Solutions</p>
      </div>
    </section>
  )
}

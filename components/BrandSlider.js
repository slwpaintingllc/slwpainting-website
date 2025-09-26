import {useState} from 'react'
export default function BrandSlider(){
  const logos = ['/brand_sherwin.svg','/brand_bm.svg','/brand_behr.svg','/brand_ppg.svg','/brand_valspar.svg','/brand_glidden.svg','/brand_dunn.svg'];
  const [start, setStart] = useState(0);
  const visible = 5;
  const prev = ()=> setStart(s=> Math.max(0, s-1));
  const next = ()=> setStart(s=> Math.min(logos.length - visible, s+1));
  return (
    <section className="section" style={{background:'#f3f4f6'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <button onClick={prev} className="carousel-btn" aria-label="Previous">◀</button>
          <div style={{overflow:'hidden',flex:1}}>
            <div style={{display:'flex',gap:24,transform:`translateX(${ -start * (100/visible) }%)`,transition:'transform 400ms ease'}}>
              {logos.map((l,idx)=> (
                <div key={l} style={{flex:`0 0 ${100/visible}%`,display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <img src={l} alt={l} style={{height:48}}/>
                </div>
              ))}
            </div>
          </div>
          <button onClick={next} className="carousel-btn" aria-label="Next">▶</button>
        </div>
      </div>
    </section>
  )
}
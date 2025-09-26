import {useRef} from 'react'
export default function Testimonials(){
  const reviews = [
    {text: 'Steven and his crew were punctual, professional, and left our home spotless. Beautiful work!', name:'Jessica M.'},
    {text: 'Fast, friendly, and fantastic attention to detail. Our living room looks brand new.', name:'Carlos R.'},
    {text: 'Great communication and fair pricing. Highly recommended.', name:'Aisha P.'},
    {text: 'Exterior job done quickly and looks incredible. Neighbors keep asking who did it!', name:'Mark T.'},
    {text: 'They transformed our kitchen. Clean, polite, and meticulous.', name:'Lina S.'},
    {text: 'Amazing team. Showed up on time and finished ahead of schedule.', name:'Omar H.'}
  ];
  const ref = useRef();
  const scroll = (dir)=> {
    if(!ref.current) return;
    ref.current.scrollBy({left: dir*320, behavior:'smooth'});
  }
  return (
    <section className="section section-black">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-6 text-white">What Our Customers Say</h3>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <button onClick={()=>scroll(-1)} className="carousel-btn">◀</button>
          <div ref={ref} style={{display:'flex',gap:'1rem',overflowX:'auto',paddingBottom:'1rem'}}>
            {reviews.map((r,idx)=> (
              <div key={idx} className="testimonial-card" style={{minWidth:300, background:'#111', color:'white'}}>
                <p>{r.text}</p>
                <div className="mt-4 font-semibold">— {r.name}</div>
                <div className="mt-2 stars">★★★★★</div>
              </div>
            ))}
          </div>
          <button onClick={()=>scroll(1)} className="carousel-btn">▶</button>
        </div>
      </div>
    </section>
  )
}
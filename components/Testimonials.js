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
  const scroll = (dir)=> { if(!ref.current) return; ref.current.scrollBy({left: dir*320, behavior:'smooth'}); }
  return (
    <section className="section section-black">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-6 text-white">What Our Customers Say</h3>
        <div className="flex items-center gap-4">
          <button onClick={()=>scroll(-1)} className="text-white text-3xl font-bold hover:text-blue-400" aria-label="Previous">
            ◀
          </button>
          <div ref={ref} className="flex gap-4 overflow-x-auto pb-4">
            {reviews.map((r,idx)=> (
              <div key={idx} className="testimonial-card bg-[#111] text-white rounded-lg p-4 min-w-[300px]">
                <p>{r.text}</p>
                <div className="mt-4 font-semibold">— {r.name}</div>
                <div className="mt-2 text-yellow-400">★★★★★</div>
              </div>
            ))}
          </div>
          <button onClick={()=>scroll(1)} className="text-white text-3xl font-bold hover:text-blue-400" aria-label="Next">
            ▶
          </button>
        </div>
      </div>
    </section>
  ) 
}
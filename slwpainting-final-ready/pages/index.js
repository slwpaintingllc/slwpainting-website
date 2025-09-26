import Nav from '../components/Nav'
import Hero from '../components/Hero'
export default function Home(){
  return (
    <div>
      <Nav />
      <Hero />
      <main className="max-w-4xl mx-auto p-6">
        <h2>Portfolio</h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'12px'}}>
          <img src="/before1.png" alt="before" style={{width:'100%',height:'160px',objectFit:'cover'}}/>
          <img src="/after1.png" alt="after" style={{width:'100%',height:'160px',objectFit:'cover'}}/>
          <img src="/proj2.png" alt="proj" style={{width:'100%',height:'160px',objectFit:'cover'}}/>
        </div>
      </main>
    </div>
  )
}

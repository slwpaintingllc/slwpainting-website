export default function Areas(){ 
  const areas = ['Phoenix','Tempe','Scottsdale','Scottsdale Mountain','Troon','Chandler','Mesa','Gilbert','Peoria','Surprise','Avondale','Goodyear']; 
  return (
    <section className="section" style={{background:'#0096db',color:'white'}}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-2xl font-bold mb-4">Areas Served</h3>
          <p className="mb-4">SLW Painting LLC is proud to offer top-quality painting services tailored to your neighborhood in and around Phoenix. We serve the following areas with dedication and care:</p>
          <ul className="grid grid-cols-2 gap-2">
            {areas.map(a=> <li key={a} className="inline-flex items-center gap-2"><span style={{fontSize:18}}>📍</span>{a}</li>)}
          </ul>
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div className="bg-white text-black rounded-lg p-8 shadow-lg" style={{minWidth:260}}>
            <h4 className="font-semibold mb-3 text-xl">CONTACT INFO</h4>
            <p className="mb-2 text-lg font-bold">480-475-8721</p>
            <p className="mb-2 text-lg">slwpaintingllc@gmail.com</p>
            <p className="mb-4">Phoenix, AZ</p>
            <a href="#contact" className="btn btn-primary">Get a Free Quote</a>
          </div>
        </div>
      </div>
    </section>
  ) 
}
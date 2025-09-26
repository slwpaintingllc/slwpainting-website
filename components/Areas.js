export default function Areas(){
  const areas = ['Phoenix','Tempe','Scottsdale','Scottsdale Mountain','Troon','Chandler','Mesa','Gilbert','Peoria','Surprise','Avondale','Goodyear'];
  return (
    <section className="section section-light">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Areas Served</h3>
        <p className="mb-4">SLW Painting LLC is proud to offer top-quality painting services tailored to your neighborhood in and around Phoenix. We serve the following areas with dedication and care:</p>
        <ul className="flex flex-wrap justify-center gap-3">{areas.map(a=> <li key={a} className="inline-block bg-white/80 rounded-md px-3 py-1">{a}</li>)}</ul>
        <div className="mt-6">
          <p className="font-semibold">CONTACT INFO:</p>
          <p>480-475-8721</p>
          <p>slwpaintingllc@gmail.com</p>
          <p>Phoenix, AZ</p>
        </div>
      </div>
    </section>
  )
}

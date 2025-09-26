import Nav from '../components/Nav'
import Hero from '../components/Hero'
import StickyCTA from '../components/StickyCTA'

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">

        <section className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-lg section-colored" style={{background:'#F8FAFC'}}>
            <h3 className="font-semibold mb-2">Trusted Pros</h3>
            <p className="text-sm text-slate-600">Experienced & vetted painters you can rely on.</p>
          </div>
          <div className="p-6 rounded-lg section-colored" style={{background:'#FEF3C7'}}>
            <h3 className="font-semibold mb-2">Quality Materials</h3>
            <p className="text-sm text-slate-600">We use top-grade paints for lasting finishes.</p>
          </div>
          <div className="p-6 rounded-lg section-colored" style={{background:'#ECFDF5'}}>
            <h3 className="font-semibold mb-2">Satisfaction Guaranteed</h3>
            <p className="text-sm text-slate-600">We stand behind our work with a satisfaction promise.</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-3">Top-Rated Painting Services in Phoenix, AZ</h2>
          <h3 className="text-xl text-slate-700 mb-4">Enhancing Your Space with Professional Painting Solutions</h3>
          <p className="text-slate-600">When you’re searching for professional painters in Phoenix, AZ, SLW Painting is your top choice. Our experienced team specializes in residential and commercial painting, delivering high-quality results tailored to the unique needs of homes and businesses in Phoenix. Whether you need a fresh coat of paint for your home or a professional upgrade for your business, our painters in Phoenix are here to help. Explore our full list of services below to see how we can enhance your property with expert craftsmanship.</p>
        </section>

        <section className="md:flex md:items-center md:gap-8">
          <div className="md:w-1/2"><img src="/owner.jpg" alt="Owner" className="rounded-lg shadow"/></div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-3">Your Local Phoenix Painter</h3>
            <p className="text-slate-600">I’m the owner of SLW Painting LLC — born and raised in the Valley. We take pride in being local, showing up on time, and treating every home like it’s our own. Call us and we’ll give you a fair, honest quote.</p>
          </div>
        </section>

        <section id="services">
          <h3 className="text-2xl font-bold mb-6">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg" style={{background:'#FFF7ED'}}>
              <h4 className="font-semibold mb-2">Interior Painting</h4>
              <p className="text-sm text-slate-600">Walls, trim, ceilings, and more.</p>
            </div>
            <div className="p-6 rounded-lg" style={{background:'#EFF6FF'}}>
              <h4 className="font-semibold mb-2">Exterior Painting</h4>
              <p className="text-sm text-slate-600">Siding, trim, decks, and shutters.</p>
            </div>
            <div className="p-6 rounded-lg" style={{background:'#FFF1F2'}}>
              <h4 className="font-semibold mb-2">Commercial Painting</h4>
              <p className="text-sm text-slate-600">Offices, retail, and multi-unit buildings.</p>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <img src="/before1.png" alt="before" className="rounded-lg w-full h-56 object-cover" />
            <img src="/after1.png" alt="after" className="rounded-lg w-full h-56 object-cover" />
            <img src="/proj2.png" alt="project" className="rounded-lg w-full h-56 object-cover" />
          </div>
        </section>

        <section id="testimonials">
          <h3 className="text-2xl font-bold mb-6">Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-white shadow">"SLW did an amazing job on our living room — clean, fast, and professional."<div className="mt-3 font-semibold">— Jamie R.</div></div>
            <div className="p-6 rounded-lg bg-white shadow">"Great communication and attention to detail. Highly recommend."<div className="mt-3 font-semibold">— Carlos M.</div></div>
            <div className="p-6 rounded-lg bg-white shadow">"They transformed our home's exterior — looks brand new!"<div className="mt-3 font-semibold">— Aisha P.</div></div>
          </div>
        </section>

        <section id="areas" className="text-center">
          <h3 className="text-2xl font-bold mb-4">Areas We Serve</h3>
          <ul className="max-w-2xl mx-auto flex flex-wrap justify-center"><li className='inline-block bg-white/80 rounded-md px-3 py-1 mr-2 mb-2'>Phoenix</li><li className='inline-block bg-white/80 rounded-md px-3 py-1 mr-2 mb-2'>Scottsdale</li><li className='inline-block bg-white/80 rounded-md px-3 py-1 mr-2 mb-2'>Tempe</li><li className='inline-block bg-white/80 rounded-md px-3 py-1 mr-2 mb-2'>Chandler</li><li className='inline-block bg-white/80 rounded-md px-3 py-1 mr-2 mb-2'>Mesa</li><li className='inline-block bg-white/80 rounded-md px-3 py-1 mr-2 mb-2'>Glendale</li><li className='inline-block bg-white/80 rounded-md px-3 py-1 mr-2 mb-2'>Peoria</li><li className='inline-block bg-white/80 rounded-md px-3 py-1 mr-2 mb-2'>Gilbert</li><li className='inline-block bg-white/80 rounded-md px-3 py-1 mr-2 mb-2'>Surprise</li><li className='inline-block bg-white/80 rounded-md px-3 py-1 mr-2 mb-2'>Avondale</li><li className='inline-block bg-white/80 rounded-md px-3 py-1 mr-2 mb-2'>Goodyear</li><li className='inline-block bg-white/80 rounded-md px-3 py-1 mr-2 mb-2'>Litchfield Park</li><li className='inline-block bg-white/80 rounded-md px-3 py-1 mr-2 mb-2'>Paradise Valley</li><li className='inline-block bg-white/80 rounded-md px-3 py-1 mr-2 mb-2'>Queen Creek</li><li className='inline-block bg-white/80 rounded-md px-3 py-1 mr-2 mb-2'>Sun City</li><li className='inline-block bg-white/80 rounded-md px-3 py-1 mr-2 mb-2'>Fountain Hills</li></ul>
        </section>

        <section id="contact" className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Get a Free Quote</h3>
          <form className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" placeholder="Name" className="p-3 border rounded" />
            <input name="email" placeholder="Email" className="p-3 border rounded" />
            <input name="phone" placeholder="Phone" className="p-3 border rounded" />
            <input name="address" placeholder="Project Address (optional)" className="p-3 border rounded" />
            <textarea name="details" placeholder="Tell us about the project" className="p-3 border rounded md:col-span-2"></textarea>
            <button className="btn btn-primary md:col-span-2">Request Quote</button>
          </form>
          <div className="mt-6">
            <p>Or call: <a href="tel:4804758721" className="text-blue-700 font-semibold">480‑475‑8721</a></p>
            <p>Email: <a href="mailto:slwpaintingllc@gmail.com" className="text-blue-700">slwpaintingllc@gmail.com</a></p>
          </div>
        </section>

      </main>

      <footer className="bg-gray-900 text-white py-8 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="mb-2">© {new Date().getFullYear()} SLW Painting LLC</p>
          <p className="text-sm">Licensed & Insured — Serving Phoenix & Surrounding Areas</p>
        </div>
      </footer>

      <StickyCTA />
    </div>
  )
}

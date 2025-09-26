import Nav from '../components/Nav'
export default function Home(){ return (
  <div>
    <Nav />
    <header className="relative bg-gradient-to-br from-blue-50 to-white text-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">SLW Painting LLC</h1>
        <p className="text-xl text-slate-700 mb-6">Professional Residential & Commercial Painting</p>
        <div className="flex justify-center gap-4">
          <a href="tel:4804758721" className="btn btn-ghost">Call (480) 475-8721</a>
          <a href="#contact" className="btn btn-primary">Get a Free Quote</a>
        </div>
      </div>
      <div className="absolute inset-0 -z-10" aria-hidden>
        <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs><radialGradient id="g" cx="50%" cy="30%"><stop offset="0%" stopColor="#E6F7FF"/><stop offset="100%" stopColor="#FFFFFF"/></radialGradient></defs>
          <rect width="100%" height="100%" fill="url(#g)" />
          <circle cx="80" cy="60" r="40" fill="#60a5fa" opacity="0.12" />
          <circle cx="200" cy="20" r="24" fill="#7dd3fc" opacity="0.10" />
          <circle cx="720" cy="120" r="56" fill="#93c5fd" opacity="0.08" />
        </svg>
      </div>
    </header>

    <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      <section id="about" className="text-center">
        <h2 className="text-3xl font-bold mb-4">About SLW Painting</h2>
        <p className="text-slate-700 max-w-3xl mx-auto">At SLW Painting LLC, we bring color and life to your spaces. With years of experience in residential and commercial painting, our team delivers professional finishes, punctual service, and respectful crews.</p>
      </section>

      <section id="process" className="text-center">
        <h2 className="text-3xl font-bold mb-8">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">1. Discover</h3><p className="text-slate-600">We discuss your needs and inspect the space.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">2. Propose</h3><p className="text-slate-600">We provide a clear quote and timeline.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">3. Prep & Paint</h3><p className="text-slate-600">We protect your property and use high-quality materials.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">4. Review</h3><p className="text-slate-600">We walk through and ensure you're satisfied.</p>
          </div>
        </div>
      </section>

      <section id="work" className="text-center">
        <h2 className="text-3xl font-bold mb-6">Before & After — Our Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="before" className="w-full h-56 object-cover" />
            <div className="p-4 bg-white"><strong>Before</strong></div>
          </div>
          <div className="rounded-lg overflow-hidden shadow">
            <img src="https://images.unsplash.com/photo-1596695578030-8f7c5c9d1f1b?auto=format&fit=crop&w=800&q=80" alt="after" className="w-full h-56 object-cover" />
            <div className="p-4 bg-white"><strong>After</strong></div>
          </div>
          <div className="rounded-lg overflow-hidden shadow">
            <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80" alt="project" className="w-full h-56 object-cover" />
            <div className="p-4 bg-white"><strong>After</strong></div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">"<em>SLW did an amazing job on our living room — clean, fast, and professional.</em>"<div className="mt-3 font-semibold">— Jamie R.</div></div>
          <div className="p-6 bg-white rounded-lg shadow">"<em>Great communication and attention to detail. Highly recommend.</em>"<div className="mt-3 font-semibold">— Carlos M.</div></div>
          <div className="p-6 bg-white rounded-lg shadow">"<em>They transformed our home's exterior — looks brand new!</em>"<div className="mt-3 font-semibold">— Aisha P.</div></div>
        </div>
      </section>

      <section id="contact" className="text-center bg-gradient-to-r from-blue-50 to-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Get a Free Quote</h2>
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
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Service Area</h3>
          <div className="aspect-w-16 aspect-h-9 max-w-2xl mx-auto">
            <iframe src="https://www.google.com/maps/d/embed?mid=1kVJk2N1K4kFzZrYvGv6j" width="100%" height="320" className="rounded" loading="lazy"></iframe>
          </div>
        </div>
      </section>
    </main>

    <footer className="bg-gray-900 text-white py-8 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <p className="mb-2">© {new Date().getFullYear()} SLW Painting LLC</p>
        <p className="text-sm">Licensed & Insured — Serving Arizona</p>
      </div>
    </footer>

    <a href="tel:4804758721" className="floating-call" aria-label="Call SLW Painting">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.3a2 2 0 011.9 1.4l.7 2.4a2 2 0 01-.45 1.9l-1.3 1.3a16 16 0 006.2 6.2l1.3-1.3a2 2 0 011.9-.45l2.4.7A2 2 0 0121 18.7V21a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" /></svg>
    </a>
  </div>
)}
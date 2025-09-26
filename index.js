import { motion } from 'framer-motion'

const testimonials = [
  { name: "Jamie R.", text: "SLW transformed our living room — professional, fast, and the finish is flawless!" },
  { name: "Carlos M.", text: "Great communication and attention to detail. Highly recommend for exterior work." },
  { name: "Aisha P.", text: "Friendly crew and beautiful custom finish on our feature wall." },
  { name: "Michael T.", text: "Our office looks brand new thanks to SLW Painting. Efficient and affordable." },
  { name: "Sophia L.", text: "They went above and beyond — very respectful of our home during the whole process." }
];

const gallery = [
  "https://images.unsplash.com/photo-1581093588401-22d58b86c532?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1520962918287-7448c2878f65?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1597007190473-fec90f475f38?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero with paint splatter */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="absolute inset-0 -z-10">
          <img src="https://www.transparenttextures.com/patterns/splatter.png" alt="paint splatter background" className="w-full h-full object-cover opacity-10" />
        </div>

        <div className="max-w-6xl mx-auto py-20 px-6 text-center relative">
          <img src="/logo.png" alt="SLW Painting logo" className="mx-auto w-36 h-36 object-contain mb-4 drop-shadow-lg" />
          <h1 className="text-5xl font-extrabold mb-3 text-blue-900">SLW Painting LLC</h1>
          <p className="text-xl text-gray-700 mb-6">Professional Residential & Commercial Painting with a personal touch</p>
          <div className="flex justify-center gap-4">
            <a href="tel:+14804758721" className="inline-flex items-center px-6 py-3 rounded-lg text-base font-medium text-blue-700 bg-white shadow hover:shadow-lg">Call: (480) 475-8721</a>
            <a href="mailto:slwpaintingllc@gmail.com" className="inline-flex items-center px-6 py-3 rounded-lg text-base font-medium bg-blue-600 text-white hover:bg-blue-700 shadow hover:shadow-lg">Email Us</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            At SLW Painting LLC, we bring color and life to your spaces. With years of experience serving both residential and commercial clients, 
            we pride ourselves on quality craftsmanship, attention to detail, and friendly service. Whether it’s a fresh coat for your home’s interior, 
            an exterior makeover, or a custom finish that makes a statement — we’re here to make your vision a reality.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Interior Painting", desc: "Freshen up your living spaces with flawless finishes." },
            { title: "Exterior Painting", desc: "Boost curb appeal with durable, weather-resistant coatings." },
            { title: "Custom Finishes", desc: "Unique textures and designs tailored to your style." }
          ].map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i*0.12 }}>
              <div className="shadow rounded-2xl h-full p-6 text-center bg-white">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
        <p className="text-center text-gray-600 mb-8">A few examples of projects we've completed (replace these with your own photos)</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img src={src} alt={`Project ${i+1}`} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-20 relative">
        <div className="absolute inset-0 -z-10">
          <img src="https://www.transparenttextures.com/patterns/splatter.png" alt="paint splatter" className="w-full h-full object-cover opacity-5" />
        </div>
        <h2 className="text-3xl font-bold text-center mb-8">What Clients Say</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 relative z-10">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl border p-6 shadow bg-white hover:shadow-lg transition">
              <p className="text-gray-700 mb-4">"{t.text}"</p>
              <p className="font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-6 md:px-20 text-center">
        <h3 className="text-2xl font-bold mb-3">Ready to transform your space?</h3>
        <p className="mb-6">Email us at <a href="mailto:slwpaintingllc@gmail.com" className="underline">slwpaintingllc@gmail.com</a> or call (480) 475-8721 for a free estimate.</p>
      </section>

      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© {new Date().getFullYear()} SLW Painting LLC. All rights reserved.</p>
      </footer>
    </div>
  )
}

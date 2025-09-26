export default function Home() {
  return (
    <div>
      <section className="relative bg-white text-center py-20">
        <h1 className="text-5xl font-bold text-gray-900">SLW Painting LLC</h1>
        <p className="mt-4 text-lg text-gray-600">Professional Interior & Exterior Painting</p>
        <p className="mt-2">Call us: <a href="tel:4804758721" className="text-blue-600">480-475-8721</a></p>
        <p>Email: <a href="mailto:slwpaintingllc@gmail.com" className="text-blue-600">slwpaintingllc@gmail.com</a></p>
      </section>

      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          At SLW Painting LLC, we bring color and life to your spaces with professional painting services. 
          From homes to offices, our experienced team ensures top-quality finishes with a friendly touch.
        </p>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-bold mb-2">Interior Painting</h3>
            <p>Transform your living spaces with fresh colors and smooth finishes.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-bold mb-2">Exterior Painting</h3>
            <p>Boost curb appeal with durable and weather-resistant coatings.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-bold mb-2">Custom Finishes</h3>
            <p>From accent walls to detailed trim, we bring your vision to life.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Work</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <img src="https://source.unsplash.com/400x300/?paint,house" alt="Project 1" className="rounded-lg shadow" />
          <img src="https://source.unsplash.com/400x300/?interior,painting" alt="Project 2" className="rounded-lg shadow" />
          <img src="https://source.unsplash.com/400x300/?wall,paint" alt="Project 3" className="rounded-lg shadow" />
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow rounded-lg">
            <p>"SLW Painting did an amazing job on our living room. Highly recommended!"</p>
            <span className="block mt-2 text-gray-600">- Sarah M.</span>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <p>"Fast, professional, and the quality exceeded our expectations."</p>
            <span className="block mt-2 text-gray-600">- James L.</span>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <p>"They completely transformed our home's exterior. We love it!"</p>
            <span className="block mt-2 text-gray-600">- Emily R.</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-700">We’d love to hear about your next project.</p>
        <p className="mt-4">Call: <a href="tel:4804758721" className="text-blue-600">480-475-8721</a></p>
        <p>Email: <a href="mailto:slwpaintingllc@gmail.com" className="text-blue-600">slwpaintingllc@gmail.com</a></p>
      </section>

      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} SLW Painting LLC. All rights reserved.</p>
      </footer>
    </div>
  )
}
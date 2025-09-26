export default function Footer(){
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <p className="mb-2">© {new Date().getFullYear()} SLW Painting LLC</p>
        <p className="text-sm">Licensed & Insured — Serving Phoenix & Surrounding Areas</p>
      </div>
    </footer>
  )
}

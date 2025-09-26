export default function PortfolioSection(){
  return (
    <section className="section section-blue">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
          <p>We always go the extra mile to ensure our customers are completely satisfied with our work. Our goal is to bring new life into your home by delivering excellent painting and unmatched customer service. At SLW Painting, we promise to be the best house guests you’ve ever had. With thoughtfulness, diligence, and attention to detail, we strive to be the painting company Phoenix homeowners can always rely on.</p>
          <p className="mt-4">Explore our recent painting projects in Phoenix, AZ, and see how SLW Painting can transform your property with expert craftsmanship.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/before1.jpg" alt="before" className="rounded-lg w-full h-56 object-cover" />
          <img src="/after1.jpg" alt="after" className="rounded-lg w-full h-56 object-cover" />
          <img src="/proj1.jpg" alt="proj1" className="rounded-lg w-full h-56 object-cover" />
          <img src="/proj2.jpg" alt="proj2" className="rounded-lg w-full h-56 object-cover" />
        </div>
      </div>
    </section>
  )
}
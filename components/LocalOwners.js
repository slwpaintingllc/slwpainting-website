export default function LocalOwners(){ 
  return (
    <section className="section section-light">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-3">WE'RE LOCALLY OWNED</h3>
          <p className="text-slate-700">
            Hello, Phoenix, Arizona!
            <br/><br/>
            We are Steven and Sarora Walker, and we are your local owners of SLW Painting LLC. 
            We’re excited to bring the amazing paint service that you deserve. We pride ourselves 
            on diligence, attention to detail, and making your dream home come to life.
            <br/><br/>
            At SLW Painting, we’re not just great painters, we’re also the best house guests. 
            We understand that your home is your sanctuary, so we promise to treat it with the utmost care and respect. 
            From start to finish, we guarantee that your space will be even cleaner than when we arrived.
            <br/><br/>
            Have a painting project in mind? Contact us today and we’ll be happy to get you a free quote!
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img src="/images/owner-cropped.jpg" alt="Owners" className="rounded-lg shadow-lg max-h-96 object-cover" />
        </div>
      </div>
    </section>
  ) 
}
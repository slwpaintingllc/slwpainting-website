export default function BrandSlider(){
  return (
    <section className="section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="brand-row" style={{animation:'scroll 20s linear infinite'}}>
          <img src="/brand_sherwin.svg" alt="Sherwin-Williams" />
          <img src="/brand_bm.svg" alt="Benjamin Moore" />
          <img src="/brand_behr.svg" alt="Behr" />
          <img src="/brand_ppg.svg" alt="PPG" />
          <img src="/brand_valspar.svg" alt="Valspar" />
          <img src="/brand_glidden.svg" alt="Glidden" />
          <img src="/brand_dunn.svg" alt="Dunn-Edwards" />
        </div>
      </div>
      <style jsx>{`@keyframes scroll { 0% { transform: translateX(0);} 100% { transform: translateX(-50%);} }`} </style>
    </section>
  )
}

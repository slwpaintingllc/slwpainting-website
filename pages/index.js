import Nav from '../components/Nav'
import Hero from '../components/Hero'
import IntroBlue from '../components/IntroBlue'
import BrandSlider from '../components/BrandSlider'
import LocalOwners from '../components/LocalOwners'
import PortfolioSection from '../components/PortfolioSection'
import Testimonials from '../components/Testimonials'
import Areas from '../components/Areas'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import StickyCTA from '../components/StickyCTA'

export default function Home(){
  return (
    <div>
      <Nav />
      <Hero />
      <IntroBlue />
      <BrandSlider />
      <LocalOwners />
      <PortfolioSection />
      <Testimonials />
      <Areas />
      <Contact />
      <Footer />
      <StickyCTA />
    </div>
  )
}
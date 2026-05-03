import HeroSection from '../components/HeroSection'
import ProblemSection from '../components/ProblemSection'
import SolutionSection from '../components/SolutionSection'
import ProductsSection from '../components/ProductsSection'
import ValidationSection from '../components/ValidationSection'
import MentorsSection from '../components/MentorsSection'
import TeamSection from '../components/TeamSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProductsSection />
      <ValidationSection />
      <MentorsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
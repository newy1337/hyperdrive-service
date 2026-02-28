import Footer from '@/components/layout/Footer'
import BrandsMarquee from '@/components/sections/BrandsMarquee'
import CarProblems from '@/components/sections/CarProblems'
import HowItWorks from '@/components/sections/HowItWorks'
import LocationContact from '@/components/sections/LocationContact'
import OurServiceSlider from '@/components/sections/OurServiceSlider'
import OurTeams from '@/components/sections/OurTeams'
import PopularServices from '@/components/sections/PopularServices'

import Header from '../components/layout/Header'
import Hero from '../components/sections/Hero'
import WhyChoose from '../components/sections/WhyChoose'

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<WhyChoose />
				<PopularServices />
				<CarProblems />
				<HowItWorks />
				<OurTeams />
				<OurServiceSlider />
				<BrandsMarquee />
				<LocationContact />
			</main>
			<Footer />
		</>
	)
}

export default App

import './App.css'
import { Countdown, Faq, Footer, GuestList, Hero, Navbar, Schedule , Location } from './sections'
import { FloatingFishermen } from './components/FloatingFishermen'

function App() {

  return (
    <>
      <FloatingFishermen />
      <Navbar />
      <Hero />
      <Schedule />
      <GuestList />
      <Countdown />
      <Faq />
      <Location />
      <Footer />
    </>
  )
}

export default App

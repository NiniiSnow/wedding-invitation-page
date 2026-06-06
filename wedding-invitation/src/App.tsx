import './App.css'
import { Countdown, Faq, Footer, GuestList, Hero, Navbar, Schedule } from './sections'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Countdown />
      <Schedule />
      {/* <Location /> */}
      {/* <GuestList /> */}
      <Faq />
      <Footer />
    </>
  )
}

export default App

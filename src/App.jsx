import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import Features from './components/Features'
import WildRift from './components/WildRift'
import Footer from './components/Footer'

import * as Sentry from '@sentry/react'

const App = () => {
  return (
    <main className="bg-[#111111]">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <WildRift />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);

import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import HowItWorks from './components/HowItWorks'
import ProductCatalog from './components/ProductCatalog'
import SocialProof from './components/SocialProof'
import Incentive from './components/Incentive'
import FAQ from './components/FAQ'
import QuoteForm from './components/QuoteForm'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <ProductCatalog />
      <SocialProof />
      <Incentive />
      <FAQ />
      <QuoteForm />
      <Footer />
      <ChatWidget />
    </div>
  )
}

export default App

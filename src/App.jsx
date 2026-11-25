import { Helmet } from 'react-helmet'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Helmet>
        <title>Xpecto - Digital Marketing & Web Development Company</title>
        <meta name="description" content="Transform your digital presence with expert web development and digital marketing solutions. Custom web apps, SEO, social media, and more." />
        <meta name="keywords" content="web development, digital marketing, SEO, web applications, custom software" />
      </Helmet>
      <div className="landing-page">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  )
}

export default App

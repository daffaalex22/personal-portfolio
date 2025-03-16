import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, 
  Hero, Navbar, Tech, Works } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover
        bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="sm:py-16 py-2">
          <About />
          <Experience />
          <Tech />
          <Works />
        </div>
        {import.meta.env.VITE_SHOW_CONTACT &&
        <div className="relative z-0 sm:mt-0 -mt-72">
          <Contact />
        </div>
        }
      </div>
    </BrowserRouter>
  )
}

export default App

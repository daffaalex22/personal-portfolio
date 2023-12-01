import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, 
  Hero, Navbar, Tech, Works, StarsCanvas } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover
        bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>

      </div>

      <div className="flex flex-col justify-center items-center">
        <a 
          href="https://www.flaticon.com/free-icons/live-stream" 
          title="live stream icons"
          className="object-center"
        >
          Live stream icons created by Freepik - Flaticon
        </a>
        <a href="https://www.freepik.com/free-psd/psd-3d-render-rocket-ioslated-background_51007258.htm#query=rocket&position=0&from_view=keyword&track=sph&uuid=be0b70fd-824d-4161-ad2b-f3bae9d48d1c">Image by vector_corp on Freepik</a> 
      </div>
    </BrowserRouter>
  )
}

export default App

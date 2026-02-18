import './index.css'
import { Header, Hero } from './components'

function App() {

  return (
    <main className=' w-93.75 m-auto'>
      <section className='bg-Navy-850 p-6 h-105 relative'>
        <Header/>
        <img 
          className='relative z-10 mt-12' 
          src="/public/images/illustration-intro.png" 
          alt="intro-illustration" />
        <img 
          className='absolute bottom-0 left-0' 
          src="/public/images/bg-curvy-mobile.svg" 
          alt="bg curvy mobile" />
      </section>
      <section className='bg-Navy-900 p-6'>
        <Hero/>
      </section>
    </main>
  )
}

export default App;

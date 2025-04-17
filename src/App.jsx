import { useState } from 'react'
import './App.css'
import Nav from './components/Nav.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Nav/>

      <main>
        <h1>Welcome to My Website</h1>
        <p>This is the main content area where you can put your text, images, and other important information.</p>

        <section>
          <h2>Latest News</h2>
          <p>Here's where you can share updates or blog posts.</p>
        </section>
      </main>


    </>
  )
}

export default App

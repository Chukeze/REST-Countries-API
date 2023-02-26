import { useState } from 'react'
import './App.css'
import Header from './component/header/Header'

function App () {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <input type="search" />
          <input type="text" />
        </aside>
        <section>
        </section>
      </main>
    </div>
  )
}

export default App

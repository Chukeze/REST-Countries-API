import { useState } from 'react'
import './App.css'
import Header from './component/header/Header'

function App () {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <main className='padding-block padding-block-sides | '>
        <aside className='country-filter-container'>
          <input className='country-filter-container__filterButton' type="search" />
          <input className='country-filter-container__filterButton' type="text" />
        </aside>
        <section className='card-form-container'>
        </section>
      </main>
    </div>
  )
}

export default App

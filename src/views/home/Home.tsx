import React from 'react'
import Card from '../../component/cards/Card';
import './Home.css';

const Home = () => {
  return (
    <>
        <aside className='padding-block padding-block-sides  | country-filter-container'>
            <div className='country-filter-container__filterButton
                country-filter-container__filterButton-searchButtonLayout
            '>
                <span>Icon</span>
                <input type="search" placeholder='Search for a country...' />
            </div>
            <input className='country-filter-container__filterButton' type="text" />
        </aside>    
        <main className='padding-block padding-block-sides '>
            <section className='card-form-container'>
                <Card/>
            </section>
        </main>
    </>

  )
}

export default Home
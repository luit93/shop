import React from 'react'
import Categories from '../components/category/Categories'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/products/Products'
import Slider from '../components/Slider'


const Home = () => {
  return (
    <div>    <Slider/>
    <Categories/>
    <Products/>
    <NewsLetter/>
    </div>
  )
}

export default Home
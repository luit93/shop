import React from 'react'
import Categories from '../components/category/Categories'
import Products from '../components/products/Products'
import Slider from '../components/Slider'


const Home = () => {
  return (
    <div>    <Slider/>
    <Categories/>
    <Products/>
    </div>
  )
}

export default Home
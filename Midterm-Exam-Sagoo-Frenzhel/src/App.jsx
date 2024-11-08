import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Identification from './Identification';
import FavoriteFood from './FavoriteFood';
import Counter from './Counter';
import Function from './Function';
import Paragraph from './Paragraph';
import MyCart from './MyCart';

export default function App() {
  const fruits = [
    {id:1, name:'Banana', color:'Yellow', rating:8 },
    {id:2, name:'Mango', color:'Yellow', rating:9 },
    {id:3, name:'Melon', color:'Orange', rating:7 },
    {id:4, name:'Apple', color:'Red', rating:8 },
    {id:5, name:'Orange', color:'Orange', rating:7 },
  ]
  const porkDishes = []
  return (
    <div>
      <Header/>
      <Identification/>
      <FavoriteFood items={fruits} type="Fruits" />
      <FavoriteFood items={porkDishes} type="Pork Dishes" />
      <Counter/>
      <Function/>
      <Paragraph/>
      <MyCart/>
      <Footer/>
    </div>
  )
}
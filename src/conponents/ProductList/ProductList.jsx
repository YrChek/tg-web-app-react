import React, { useState } from 'react';
import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem';
import { useTelegram } from '../../hooks/useTelegram';

const products = [
  {id: '1', title: 'Джинсы', price: 5000, description: 'Синего цвета, прямые'},
  {id: '2', title: 'Куртка', price: 12000, description: 'Зеленого цвета, кожа'},
  {id: '3', title: 'Куртка', price: 8000, description: 'Черного цвета, кожа'},
  {id: '4', title: 'Куртка', price: 5000, description: 'Бежевого цвета, ткань'},
  {id: '5', title: 'Куртка', price: 20000, description: 'Коричневого цвета, мех, кожа'},
  {id: '6', title: 'Джинсы', price: 5000, description: 'Черного цвета, прямые'},
  {id: '7', title: 'Джинсы', price: 5500, description: 'Синего цвета, лайкра'},
  {id: '8', title: 'Джинсы', price: 5500, description: 'Черного цвета, лайкра'},
]

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return acc += item.price
  }, 0)
}

const ProductList = () => {

  const [basket, setBasket] = useState([]);
  const { tg } = useTelegram()

  const onAdd = (product) => {
    const alreadyAdded = basket.find(item => item.id === product.id);
    let newItems = [];

    if(alreadyAdded) {
      newItems = basket.filter(item => item.id !== product)
    } else {
      newItems = [...basket, product]
    }

    setBasket(newItems)

    if(newItems.length === 0) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(newItems)} руб`
      })
    }
  }

  return (
    <div className='list'>
      {products.map(item => 
        <ProductItem
          product={item}
          onAdd={onAdd}
          className={'item'}
        />
      )}
    </div>
  )
}

export default ProductList

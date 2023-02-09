import React from 'react'
import BasketItem from './BasketItem'
const Basket = ({ basket, resetBasket, total, products }) => {
    return (
        <div className='basket-container'>

            <h4>Sifarishin teferruatlari:</h4>


            <ul>
                {
                    basket.map(item => (
                        <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)} />
                    ))
                }



            </ul>

            <div className="total">
                Total:{total} AZN
            </div>


        </div>
    )
}

export default Basket
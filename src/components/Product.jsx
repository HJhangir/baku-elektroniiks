import React from 'react'

import { HiReceiptRefund } from 'react-icons/hi'
import { BsFillBasket2Fill } from 'react-icons/bs'

const Product = ({ total, money, basket, setBasket, product }) => {

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = _ => {
        const checkBasket = basketItem

        if (checkBasket) {
            //amount key elave etdik
            checkBasket.amount += 1
            //spread operator ...
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        }

        else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const refundProduct = _=> {
        const currentBasket = basket.find(item=>item.id === product.id)
        const basketWithoutCurrent = basket.filter(item=> item.id !== product.id )

        currentBasket.amount -=1

        if(currentBasket.amount ===0) {
            setBasket([...basketWithoutCurrent])
        }

        else {
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }








    return (
        <div className="product">
            <img src={product.image} alt="" />
            <h6>{product.title}</h6>
            <div className="price">{product.price}</div>

            <div className="action">
                <button className="refund-btn" disabled={!basketItem} onClick={refundProduct}><HiReceiptRefund size={32} /></button>
                <span></span>
                <button className="add-basket-btn" disabled={total+product.price> money} onClick={addBasket}><BsFillBasket2Fill size={32} /></button>
            </div>
        </div>
    )
}

export default Product
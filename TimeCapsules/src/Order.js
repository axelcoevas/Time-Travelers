import React from 'react';
import './static/Order.css';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from './CheckoutProduct';
import moment from 'moment';

function Order({ order }) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
                {order.data.basket?.map((item) =>
                    <CheckoutProduct
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        hideButton={true}
                    />     
                )}
            <CurrencyFormat 
            renderText={(value) => (
                <>
                <h1>Oder Total: {value}</h1>
                </>
            )}
            decimalScale={2}
            value={order.data.amount / 100}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
        </div>
    )
}

export default Order

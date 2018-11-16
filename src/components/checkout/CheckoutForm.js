import React from 'react';
import '../../sass/Checkout.scss'


const CheckoutForm = (props) => (
    <div className={'checkout-form'}>
        <h2>Checkout Form</h2>
        <form>
            <input type="text" placeholder={'Name'}/>
            <input type="text" placeholder={'Email'}/>
            <button className={'btn'}
                    onClick={props.confirmOrder}
            >Place order</button>
        </form>
    </div>
)

export default  CheckoutForm
import React, {Component} from 'react';
import Cart from '../cart/Cart'
import CheckoutForm from '../checkout/CheckoutForm'
import ConfirmOrder from '../checkout/ConfirmOrder'

class Checkout extends Component{
    componentManager() {

        switch(this.props.checkoutStep) {
            case 'checkout':
                return <CheckoutForm confirmOrder={this.props.confirmOrder}/>
            case 'confirmation':
                return <ConfirmOrder onContinue={this.props.onClose}/>
            default:
                return <Cart {...this.props} nextStep={'checkout'}/>
        }
    }

    render() {
        return this.componentManager();
    }
}

export default Checkout;
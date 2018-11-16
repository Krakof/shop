import React from 'react';


const ConfirmOrder = (props) => (
    <div>
        <h2>Order placed successfully!</h2>
        <button className={'btn'} onClick={props.onContinue}>Continue shopping</button>
    </div>
)

export default  ConfirmOrder
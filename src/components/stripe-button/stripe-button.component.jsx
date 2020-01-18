import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
const StripeCheckoutButton= ({price}) => 
{
    const onToken=token=>{
        console.log(token);
        alert("paypen succcc")
    }
    const priceForStripe=price*100;
    const publishableKey='pk_test_X9AlSaDnG2jcidt5M9T1qCEw00nQWlLMtF'
    return (
        <StripeCheckout
            label='Pay Now'
            name='CROWN CLOTHING Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

        />
    )
}

export default StripeCheckoutButton
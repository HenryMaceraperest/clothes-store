import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I8lUCF3zkOL5EsI3yRu0zNtl49s9RzpxryRssM52KgYeZLWN591mubh9yaByP3gxQSlUVxEH5f5YL4paZ12JmCQ00YGpa31yo';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert(`Payment of ${price}€ was successful!`)
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue with your payment. Please make sure you provided the right details!');
        });
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
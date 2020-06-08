import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  // price must be in cents
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_awZb1H4HIDeV3nsFhQnfjQIl00s7labF57';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment Successful!');
      })
      .catch((err) => {
        console.log(err);
        alert(
          'There was an issue with your payment. Please ensure you use the provided test credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      currency="SGD"
      label="Pay Now"
      name="Naidzel Clothing Pte Ltd"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;

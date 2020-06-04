import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  // price must be in cents
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_awZb1H4HIDeV3nsFhQnfjQIl00s7labF57';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful!');
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

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JuobZC19mza60a6T8O0ktEgkMhv2zq64IaFPDtZC9OEGJTBqbZwd5KIUa8jHsZILUfDzkrvjocXa6UvVnyJLJRm008eaBPpYR';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/Cuz.svg'
      description={`Your total is $${price}`}
      amunt={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

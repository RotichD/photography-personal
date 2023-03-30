import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function CheckoutForm() {
    const stripe = useStripe();

  return (
    <form >
        <CardElement />
        <button type='submit'>Pay</button>
    </form>
  )
}

export default CheckoutForm